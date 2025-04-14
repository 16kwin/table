import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';
import '../../styles/TableFilters.css'; // Создадим этот файл для стилей

function TableFilters({ data, onFilter }) {
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('2025'); // 2025 по умолчанию
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('2025'); // 2025 по умолчанию
  const [transaction, setTransaction] = useState('');
  const [status, setStatus] = useState('');

  const filterData = useCallback(() => {
    if (!data || !data.ppps) {
      onFilter([]);
      return;
    }

    let filtered = data.ppps.filter(item => {
      // Фильтр по месяцу и году начала
      if (startMonth && startYear) {
        const startDate = moment(item.planDateStart);
        if (startDate.format('MM') !== startMonth || startDate.format('YYYY') !== startYear) {
          return false;
        }
      }

      // Фильтр по месяцу и году окончания
      if (endMonth && endYear) {
        const endDate = moment(item.planDateStop);
        if (endDate.format('MM') !== endMonth || endDate.format('YYYY') !== endYear) {
          return false;
        }
      }

      // Фильтр по транзакции (теперь includes)
      if (transaction && !item.transaction.includes(transaction)) {
        return false;
      }

      // Фильтр по статусу
      if (status && status !== 'Все' && item.status !== status) {
        return false;
      }

      return true;
    });

    onFilter(filtered);
  }, [data, startMonth, startYear, endMonth, endYear, transaction, status, onFilter]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  const months = moment.months();

  return (
    <div className="filters-container"> {/* Добавляем контейнер для фильтров */}
      <div className="filter-group">
        <label>Месяц начала:</label>
        <select value={startMonth} onChange={e => setStartMonth(e.target.value)}>
          <option value="">Все</option>
          {months.map((month, index) => (
            <option key={index} value={(index + 1).toString().padStart(2, '0')}>{month}</option>
          ))}
        </select>
        <select value={startYear} onChange={e => setStartYear(e.target.value)}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Месяц окончания:</label>
        <select value={endMonth} onChange={e => setEndMonth(e.target.value)}>
          <option value="">Все</option>
          {months.map((month, index) => (
            <option key={index} value={(index + 1).toString().padStart(2, '0')}>{month}</option>
          ))}
        </select>
        <select value={endYear} onChange={e => setEndYear(e.target.value)}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Транзакция:</label>
        <input
          type="text"
          placeholder="Номер транзакции"
          value={transaction}
          onChange={e => setTransaction(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Статус:</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">Все</option>
          <option value="В работе">В работе</option>
          <option value="Завершено">Завершено</option>
          <option value="Отложено">Отложено</option>
        </select>
      </div>
    </div>
  );
}

export default TableFilters;