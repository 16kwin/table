import '../../styles/table.css';
import React, { useState, useEffect } from 'react';

function Secondtable() {
  const [employeePerformances, setEmployeePerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://194.87.56.253:8080/employees/performance');
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
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
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
          <th>Простои сотрудника</th>
        </tr>
      </thead>
      <tbody>
        {employeePerformances.map(employee => (
          <tr key={employee.employeeId}>
            <td>{employee.employeeName}</td>
            <td>{employee.employeeSpecialization}</td>
            <td>{employee.totalOperations}</td>
            <td>{employee.onTimeOperations}</td>
            <td>{employee.onTimePercentage.toFixed(2)}%</td> {/* Форматируем до 2 знаков после запятой */}
            <td>{employee.totalNorm}</td>
            <td>{employee.totalTimeSpent}</td>
            <td>{employee.normPercentage}</td>
            <td>В разработке</td>
            <td>В разработке</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Secondtable;