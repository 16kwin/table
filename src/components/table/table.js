import Headtable from "../headtable/headtable.js"
import '../../styles/table.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ru';
function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/ppp');
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
  const formatDate1 = (timestamp) => {
    if (!timestamp) return '';
    // Преобразуем в объект Moment в UTC
    const momentDate = moment(timestamp);

    // Форматируем дату и время в локальном часовом поясе пользователя
    return momentDate.tz(moment.tz.guess()).format('YYYY-MM-DD HH:mm:ss');
};

// Функция для форматирования только даты
const formatDate2 = (timestamp) => {
    if (!timestamp) return '';
    const momentDate = moment(timestamp);
    return momentDate.tz(moment.tz.guess()).format('YYYY-MM-DD');
};

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
<>
    <table>
    <Headtable/>
    <tr>
        <td colspan="23"></td>
    </tr>
    <tr>
        <td rowspan="2">Статус</td>
        <td rowspan="2">Транзакция</td>
        <td rowspan="2">План на ППП, час</td>
        <td rowspan="2">Норматив на операцию, час</td>
        <td rowspan="2">Норматив на опцию, час</td>
        <td rowspan="2">Затрачено, час</td>
        <td rowspan="2">Закрытие в срок</td>
        <td rowspan="2">Устранение неисправностей, час</td>
        <td colspan="3">Начало ППП</td>
        <td rowspan="2">Входной контроль</td>
        <td rowspan="2">Подключение</td>
        <td rowspan="2">Проверка механиком</td>
        <td rowspan="2">Проверка электронщиком</td>
        <td rowspan="2">Проверка технологом</td>
        <td rowspan="2">Выходной контроль</td>
        <td rowspan="2">Транспортное</td>
        <td colspan="3">Завершение ППП</td>
        <td colspan="3">Дата отргузки</td>

    </tr>
    <tr>
    <td>План</td>
    <td>Прогноз</td>
    <td>Факт</td>
    <td>План</td>
    <td>Прогноз</td>
    <td>Факт</td>
    <td>План</td>
    <td>Прогноз</td>
    <td>Факт</td>
    </tr>
    {data.map((item) => (
      <>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart1C)}</td>
        <td>{formatDate2(item.forecastDataStart1C)}</td>
        <td>{formatDate2(item.factDataStart1C)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStop1C)}</td>
        <td>{formatDate2(item.forecastDataStop1C)}</td>
        <td>{formatDate2(item.factDataStop1C)}</td>
        <td rowspan="8">{formatDate2(item.planDataShipment1C)}</td>
        <td rowspan="8">{formatDate2(item.forecastDataShipment1C)}</td>
        <td rowspan="8">{formatDate2(item.factDataShipment1C)}</td>
        

    </tr>
    <tr>
        <td rowspan="7">{item.status}</td>
        <td rowspan="7">{item.transaction}</td>
        <td rowspan="7">{item.planPpp}:00:00</td>
        <td>{item.operationNorm1}:00</td>
        <td>{item.optionNorm1}:00</td>
        <td>{item.operationTime1}</td>
        <td>100%</td>
        <td>{item.problemTime1}:00</td>
        <td>{formatDate2(item.planDataStart1)}</td>
        <td>{formatDate2(item.forecastDataStart1)}</td>
        <td>{formatDate1(item.startTimePpp1)}</td>
        <td>ФИО1 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart2)}</td>
        <td>{formatDate2(item.forecastDataStart2)}</td>
        <td>{formatDate1(item.stopTimePpp1)}</td>

    </tr>
    <tr>
        <td>{item.operationNorm2}:00</td>
        <td>{item.optionNorm2}:00</td>
        <td>{item.operationTime2}</td>
        <td>100%</td>
        <td>{item.problemTime2}:00</td>
        <td>{formatDate2(item.planDataStart2)}</td>
        <td>{formatDate2(item.forecastDataStart2)}</td>
        <td>{formatDate1(item.startTimePpp2)}</td>
        <td>0:20</td>
        <td>ФИО2 часов 6:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart3)}</td>
        <td>{formatDate2(item.forecastDataStart3)}</td>
        <td>{formatDate1(item.stopTimePpp2)}</td>
    </tr>
    <tr>
    <td>{item.operationNorm3}:00</td>
        <td>{item.optionNorm3}:00</td>
        <td>{item.operationTime3}</td>
        <td>139%</td>
        <td>{item.problemTime3}:00</td>
        <td>{formatDate2(item.planDataStart3)}</td>
        <td>{formatDate2(item.forecastDataStart3)}</td>
        <td>{formatDate1(item.startTimePpp3)}</td>
        <td></td>
        <td>0:40</td>
        <td>ФИО3 часов 15:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart4)}</td>
        <td>{formatDate2(item.forecastDataStart4)}</td>
        <td>{formatDate1(item.stopTimePpp3)}</td>

    </tr>
    <tr>
    <td>{item.operationNorm4}:00</td>
        <td>{item.optionNorm4}:00</td>
        <td>{item.operationTime4}</td>
        <td>94%</td>
        <td>{item.problemTime4}:00</td>
        <td>{formatDate2(item.planDataStart4)}</td>
        <td>{formatDate2(item.forecastDataStart4)}</td>
        <td>{formatDate1(item.startTimePpp4)}</td>
        <td></td>
        <td></td>
        <td>20:20</td>
        <td>ФИО4 часов 10:00 Опции: 8:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart5)}</td>
        <td>{formatDate2(item.forecastDataStart5)}</td>
        <td>{formatDate1(item.stopTimePpp4)}</td>

    </tr>
    <tr>
    <td>{item.operationNorm5}:00</td>
        <td>{item.optionNorm5}:00</td>
        <td>{item.operationTime5}</td>
        <td>100%</td>
        <td>{item.problemTime5}:00</td>
        <td>{formatDate2(item.planDataStart5)}</td>
        <td>{formatDate2(item.forecastDataStart5)}</td>
        <td>{formatDate1(item.startTimePpp5)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО5 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td>{formatDate2(item.planDataStart6)}</td>
        <td>{formatDate2(item.forecastDataStart6)}</td>
        <td>{formatDate1(item.stopTimePpp5)}</td>

    </tr>
    <tr>
    <td>{item.operationNorm6}:00</td>
        <td>{item.optionNorm6}:00</td>
        <td>{item.operationTime6}</td>
        <td>100%</td>
        <td>{item.problemTime6}:00</td>
        <td>{formatDate2(item.planDataStart6)}</td>
        <td>{formatDate2(item.forecastDataStart6)}</td>
        <td>{formatDate1(item.startTimePpp6)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>0:20</td>
        <td>ФИО6 часов 5:30 Опции: 15:00</td>
        <td></td>
        <td>{formatDate2(item.planDataStart7)}</td>
        <td>{formatDate2(item.forecastDataStart7)}</td>
        <td>{formatDate1(item.stopTimePpp6)}</td>

    </tr>
    <tr>
    <td>{item.operationNorm7}:00</td>
        <td>{item.optionNorm7}:00</td>
        <td>{item.operationTime7}</td>
        <td>100%</td>
        <td>{item.problemTime7}:00</td>
        <td>{formatDate2(item.planDataStart7)}</td>
        <td>{formatDate2(item.forecastDataStart7)}</td>
        <td>{formatDate1(item.startTimePpp7)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО7 часов 5:00 Опции: 15:00</td>
        <td>{formatDate2(item.planDataStart8)}</td>
        <td>{formatDate2(item.forecastDataStart8)}</td>
        <td>{formatDate1(item.stopTimePpp7)}</td>
    </tr>
    <tr>
        <td></td>
        <td>Отклонение от плана</td>
        <td>{item.planPppVar}%</td>
        <td></td>
        <td>Затрачено часов</td>
        <td>{item.operationTimeSum}:00:00</td>
        <td>105%</td>
        <td>{item.problemTimeSum}:00:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Межоперационное ожидание</td>
        <td>24:20:00</td>
        <td></td>
        <td>Итого время такта</td>
        <td>98:20:00</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</>
))}
    </table>
    </>
  );
}

export default Table;