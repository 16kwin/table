import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';

function TableFilters({ data, onFilter }) {
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [transaction, setTransaction] = useState('');
  const [status, setStatus] = useState('');

  const filterData = useCallback(() => {
    if (!data || !data.ppps) {
      onFilter([]); // Если данных нет, передаем пустой массив
      return;
    }

    let filtered = data.ppps.filter(item => {
      // Фильтр по месяцу и году начала
      if (startMonth && startYear) {
        const startDate = moment(item.factDateStart);
        if (startDate.format('MM') !== startMonth || startDate.format('YYYY') !== startYear) {
          return false;
        }
      }

      // Фильтр по месяцу и году окончания
      if (endMonth && endYear) {
        const endDate = moment(item.factDateStop);
        if (endDate.format('MM') !== endMonth || endDate.format('YYYY') !== endYear) {
          return false;
        }
      }

      // Фильтр по транзакции
      if (transaction && item.transaction !== transaction) {
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
    <div>
      <div>
        <label>Дата начала:</label>
        <select value={startMonth} onChange={e => setStartMonth(e.target.value)}>
          <option value="">Месяц</option>
          {months.map((month, index) => (
            <option key={index} value={(index + 1).toString().padStart(2, '0')}>{month}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Год"
          value={startYear}
          onChange={e => setStartYear(e.target.value)}
        />
      </div>

      <div>
        <label>Дата окончания:</label>
        <select value={endMonth} onChange={e => setEndMonth(e.target.value)}>
          <option value="">Месяц</option>
          {months.map((month, index) => (
            <option key={index} value={(index + 1).toString().padStart(2, '0')}>{month}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Год"
          value={endYear}
          onChange={e => setEndYear(e.target.value)}
        />
      </div>

      <div>
        <label>Транзакция:</label>
        <input
          type="text"
          placeholder="Номер транзакции"
          value={transaction}
          onChange={e => setTransaction(e.target.value)}
        />
      </div>

      <div>
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