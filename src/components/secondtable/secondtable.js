import '../../styles/table.css';
import React, { useState, useEffect } from 'react';

function Secondtable() {
  const [employeePerformances, setEmployeePerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(''); // Добавляем состояние для выбранного месяца

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = 'http://194.87.56.253:8080/employees/performance';
      if (selectedMonth) {
        url += `?month=${selectedMonth}`; // Добавляем параметр month, если выбран месяц
      }
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setEmployeePerformances(json);
      } catch (error) {
        setError(error);
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedMonth]); // Запускаем эффект при изменении selectedMonth

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // Обновляем состояние при выборе месяца
  };

  // Создаем массив месяцев для выпадающего списка
  const months = [
    { value: '', label: 'Все месяцы' }, // Добавляем опцию "Все месяцы"
    { value: '1', label: 'Январь' },
    { value: '2', label: 'Февраль' },
    { value: '3', label: 'Март' },
    { value: '4', label: 'Апрель' },
    { value: '5', label: 'Май' },
    { value: '6', label: 'Июнь' },
    { value: '7', label: 'Июль' },
    { value: '8', label: 'Август' },
    { value: '9', label: 'Сентябрь' },
    { value: '10', label: 'Октябрь' },
    { value: '11', label: 'Ноябрь' },
    { value: '12', label: 'Декабрь' },
  ];

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <label htmlFor="monthSelect">Выберите месяц:</label>
      <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
        {months.map(month => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Сотрудник</th>
            <th>Профессия</th>
            <th>Количество выполненных этапов</th>
            <th>Количество этапов выполненных в срок</th>
            <th>Доля этапов выполненных в срок</th>
            <th>Нормативное время работы</th>
            <th>Фактическое время работы</th>
            <th>Коэффициент выполнености норм</th>
            <th>Фонд рабочего времени</th>
            <th>Выроботка сотрудника</th>
          </tr>
        </thead>
        <tbody>
          {employeePerformances.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeSpecialization}</td>
              <td>{employee.totalOperations}</td>
              <td>{employee.onTimeOperations}</td>
              <td>{employee.onTimePercentage.toFixed(2)}%</td>
              <td>{employee.totalNorm}</td>
              <td>{employee.totalTimeSpent}</td>
              <td>{employee.normPercentage}</td>
              <td>{employee.workingHoursFund}</td>
              <td>{employee.workingHoursFundUsage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Secondtable;