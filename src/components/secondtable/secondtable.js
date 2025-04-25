import '../../styles/table.css';
import React, { useState, useEffect } from 'react';
import '../../styles/TableFilters.css';

function Secondtable() {
  const [employeePerformances, setEmployeePerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedThreshold, setSelectedThreshold] = useState(80);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = 'http://localhost:8080/employees/performance';
      const params = new URLSearchParams();

      if (selectedMonth) {
        params.append('month', selectedMonth);
      }
      if (selectedYear) {
        params.append('year', selectedYear);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
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
  }, [selectedMonth, selectedYear]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleThresholdChange = (event) => {
    setSelectedThreshold(parseInt(event.target.value, 10)); // Преобразуем в число
  };

  const months = [
    { value: '', label: 'Все месяцы' },
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

  const years = () => {
    const currentYear = new Date().getFullYear();
    const yearsList = [{ value: '', label: 'Все годы' }];
    for (let i = currentYear; i >= 2020; i--) {
      yearsList.push({ value: i.toString(), label: i.toString() });
    }
    return yearsList;
  };
  const thresholdOptions = () => {
    const options = [];
    for (let i = 50; i <= 100; i += 5) {
      options.push({ value: i, label: `${i}%` });
    }
    return options;
  };
  const formatNormPercentage = (percentage, totalOperations) => {
    const percentageValue = Number(percentage);

    if (isNaN(percentageValue)) {
      return <td className="neutral">Неизвестно</td>;
    }

    if (percentageValue >= 100) {
      return <td className="green">{percentage}%</td>;
    } else {
      if (totalOperations === 0) {
        return <td className="neutral">{percentage}%</td>;
      } else {
        return <td className="red">{percentage}%</td>;
      }
    }
  };

  const formatPercentage = (percentage, totalOperations) => {
    const percentageValue = parseFloat(percentage);

    if (isNaN(percentageValue)) {
      return <div className="neutral">Неизвестно</div>;
    }

    if (percentageValue >= selectedThreshold) { // Используем выбранный порог
      return <td className="green">{percentage}%</td>;
    } else {
      if (totalOperations === 0) {
        return <td>{percentage}%</td>;
      } else {
        return <td className="red">{percentage}%</td>;
      }
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <div className="filters-container">
        <div className="filter-group">
          <label>Выберите месяц:</label>
          <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange}>
            {months.map(month => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Выберите год:</label>
          <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
            {years().map(year => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Выберите порог (%):</label>
          <select id="thresholdSelect" value={selectedThreshold} onChange={handleThresholdChange}>
            {thresholdOptions().map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          </div>
      </div>
      <div className="table-container">
      <table>
        <thead className="sticky-header">
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
            <th>Выработка сотрудника</th>
          </tr>
        </thead>
        <tbody>
          {employeePerformances.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeSpecialization}</td>
              <td>{employee.totalOperations}</td>
              <td>{employee.onTimeOperations}</td>
              {formatNormPercentage(employee.onTimePercentage.toFixed(2), employee.totalOperations)}
              <td>{employee.totalNorm}</td>
              <td>{employee.totalTimeSpent}</td>
              {formatPercentage(employee.normPercentage, employee.totalOperations)}
              <td>{employee.workingHoursFund}</td>
              <td>{employee.workingHoursFundUsage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Secondtable;