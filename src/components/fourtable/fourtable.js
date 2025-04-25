import Headfourtable from "./headfourtable.js";
import '../../styles/table.css';
import '../../styles/fourtable.css';
import React, { useState, useEffect } from 'react';
import 'moment/locale/ru';

function Fourtable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://194.87.56.253:8080/api/ppp');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Фильтруем данные сразу после их получения
    if (data && data.ppps) {
      const filtered = data.ppps.filter(item => item.status === 'В работе');
      setFilteredData(filtered);
    }
  }, [data]);


  function getTimeExceedsNorm(operations, operationType) {
    const operation = operations.find(op => op.operationType === operationType);
    if (!operation) {
      return <td className="td"></td>; // Если операция не найдена
    }
    return operation.isTimeExceedsNorm ? <td className="green td"></td> : <td className="red td" ></td>; // Преобразование true/false в "Да"/"Нет"
  }

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead className="sticky-header-2">
            <Headfourtable />
          </thead>
          <thead>
            <tr className="tr">
              <td rowSpan="2" className="td">Транзакция</td>
              <td rowSpan="2" className="td">Входной контроль</td>
              <td rowSpan="2" className="td">Подключение</td>
              <td rowSpan="2" className="td">Проверка механиком</td>
              <td rowSpan="2" className="td">Проверка электронщиком</td>
              <td rowSpan="2" className="td">Проверка технологом</td>
              <td rowSpan="2" className="td">Выходной контроль</td>
              <td rowSpan="2" className="td">Транспортное</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => ( // Отображаем отфильтрованные данные
              <React.Fragment key={item.transaction}>
                <tr className="tr">
                  <td className="td">{item.transaction}</td>
                  {getTimeExceedsNorm(item.operations, "Входной контроль")}
                  {getTimeExceedsNorm(item.operations, "Подключение")}
                  {getTimeExceedsNorm(item.operations, "Проверка механиком")}
                  {getTimeExceedsNorm(item.operations, "Проверка электронщиком")}
                  {getTimeExceedsNorm(item.operations, "Проверка технологом")}
                  {getTimeExceedsNorm(item.operations, "Выходной контроль")}
                  {getTimeExceedsNorm(item.operations, "Транспортное положение")}
                </tr>
                <br />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Fourtable;