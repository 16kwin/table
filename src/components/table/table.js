import Headtable from "../headtable/headtable.js";
import '../../styles/table.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ru';
import TableFilters from "./TableFilters"; // Импортируем TableFilters

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]); // State для отфильтрованных данных

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

function getOperationStartTime(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.startTime : "";
}
function getOperationStopTime(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.stopTime : "";
}
function getOperationNormValue(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.norm.operationNorm : "";
}
function getOptionNormValue(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.optionNorm : "";
}
function getOperationDuration(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.totalDuration : "";
}
function getOptionDuration(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.optionsDuration : "";
}
function getOperationNormDuration(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.operationDuration : "";
}
function getTimeExceedsNorm(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);

  if (!operation) {
    return ""; // Если операция не найдена
  }

  return operation.isTimeExceedsNorm ? <td className="green">Да</td> : <td className="red">Нет</td>; // Преобразование true/false в "Да"/"Нет"
}
function formatEmployeeName(fullName) {
  if (!fullName) {
    return ""; // Возвращаем пустую строку, если имя не передано
  }

  const parts = fullName.split(" "); // Разделяем строку на части по пробелам
  if (parts.length < 3) {
    return fullName; // Если меньше трёх частей (например, только имя), возвращаем как есть
  }

  const lastName = parts[0]; // Фамилия - первая часть
  const firstName = parts[1]; // Имя - вторая часть
  const middleName = parts[2]; // Отчество - третья часть

  const initials = `${firstName.charAt(0).toUpperCase()}.${middleName.charAt(0).toUpperCase()}.`; // Инициалы: первая буква имени и отчества с точками

  return `${lastName} ${initials}`; // Возвращаем фамилию и инициалы
}
function getOperationEmployeeName(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  if (operation && operation.employee && operation.employee.employeesName) {
    return formatEmployeeName(operation.employee.employeesName); // Используем formatEmployeeName
  }
  return "";
}

function getProblemTime(operations, operationType) {
  const operation = operations.find(op => op.operationType === operationType);
  return operation ? operation.problemsNormHours : "";
}
function getTimeDifferenceByOperationType(operationTimes, operationType) {
  const operationTime = operationTimes.find(op => op.operationType === operationType);
  return operationTime ? operationTime.timeDifference : "";
}

function getForecastDatesPlan(forecastDatesPlan, operationName) {
  const forecastDateDto = forecastDatesPlan && forecastDatesPlan.find(op => op && op.operationName === operationName);
  return forecastDateDto ? forecastDateDto.forecastDate : "";
}
function getForecastDatesStart(forecastDatesStart, operationName) {
  const forecastDateDto = forecastDatesStart && forecastDatesStart.find(op => op && op.operationName === operationName);
  return forecastDateDto ? forecastDateDto.forecastDate : "";
}
function getCompletionPercentageDisplay(percentage) {
  const percentageValue = Number(percentage); // Преобразуем в число

  if (isNaN(percentageValue)) {
    return <div>Неизвестно</div>; // Обработка нечисловых значений
  }

  if (percentageValue < 100) {
    return <td className="red">{percentage}%</td>;
  } else {
    return <td className="green">{percentage}%</td>;
  }
}
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }



  return (
<>
<TableFilters data={data} onFilter={setFilteredData} /> {/* Используем TableFilters */}
<div className="table-container">
    <table>
        <thead className="sticky-header">
            <Headtable />
            <tr>
                <td colspan="24"></td>
            </tr>
            <tr>
                <td rowspan="2">Статус</td>
                <td rowspan="2">Транзакция</td>
                <td rowspan="2">План на ППП, час</td>
                <td rowspan="2">Норматив на операцию, час</td>
                <td rowspan="2">Норматив на опцию, час</td>
                <td rowspan="2">Затрачено факт, час</td>
                <td rowspan="2">Закрытие в срок</td>
                <td rowspan="2">Устранение отклонений, час</td>
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
        </thead>


    <tbody>
    {filteredData.map((item) => ( // Отображаем отфильтрованные данные
          <React.Fragment key={item.transaction}>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="date-cell">{formatDate2(item.planDateStart)}</td>
        <td className="date-cell">{formatDate2(item.forecastDateStart)}</td>
        <td className="date-cell">{formatDate2(item.factDateStart)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="date-cell">{formatDate2(item.planDateStop)}</td>
        <td className="date-cell">{formatDate2(item.forecastDateStop)}</td>
        <td className="date-cell">{formatDate2(item.factDateStop)}</td>
        <td rowspan="8" className="date-cell">{formatDate2(item.planDateShipment)}</td>
        <td rowspan="8" className="date-cell">{formatDate2(item.forecastDateShipment)}</td>
        <td rowspan="8" className="date-cell">{formatDate2(item.factDateShipment)}</td>
    </tr>




    <tr>
        <td rowspan="7">{item.status}</td>
        <td rowspan="7">{item.transaction}</td>
        <td rowspan="7">{item.planPpp}:00:00</td>
        <td>{getOperationNormValue(item.operations, "Входной контроль")}:00</td>
        <td>{getOptionNormValue(item.operations, "Входной контроль")}</td>
        <td>{getOperationDuration(item.operations, "Входной контроль")}</td>
        {getTimeExceedsNorm(item.operations, "Входной контроль")}
        <td>{getProblemTime(item.operations, "Входной контроль")}</td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Входной контроль")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Входной контроль")}</td>
        <td>{formatDate1(getOperationStartTime(item.operations, "Входной контроль"))}</td>
        <td>{getOperationEmployeeName(item.operations, "Входной контроль")}<br/>Операция {getOperationNormDuration(item.operations, "Входной контроль")}<br/>Опция {getOptionDuration(item.operations, "Входной контроль")}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Подключение")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Подключение")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Входной контроль"))}</td>
    </tr>




    <tr>
        <td>{getOperationNormValue(item.operations, "Подключение")}:00</td>
        <td>{getOptionNormValue(item.operations, "Подключение")}</td>
        <td>{getOperationDuration(item.operations, "Подключение")}</td>
        {getTimeExceedsNorm(item.operations, "Подключение")}
        <td>{getProblemTime(item.operations, "Подключение")}</td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Подключение")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Подключение")}</td>
        <td>{formatDate1(getOperationStartTime(item.operations, "Подключение"))}</td>
        <td>{getTimeDifferenceByOperationType(item.operationTimes, "Подключение")}</td>
        <td>{getOperationEmployeeName(item.operations, "Подключение")}<br/>Операция {getOperationNormDuration(item.operations, "Подключение")}<br/>Опция {getOptionDuration(item.operations, "Подключение")}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка механиком")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка механиком")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Подключение"))}</td>
    </tr>




    <tr>
    <td>{getOperationNormValue(item.operations, "Проверка механиком")}:00</td>
        <td>{getOptionNormValue(item.operations, "Проверка механиком")}</td>
        <td>{getOperationDuration(item.operations, "Проверка механиком")}</td>
        {getTimeExceedsNorm(item.operations, "Проверка механиком")}
        <td>{getProblemTime(item.operations, "Проверка механиком")}</td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка механиком")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка механиком")}</td>
        <td>{formatDate1(getOperationStartTime(item.operations, "Проверка механиком"))}</td>
        <td></td>
        <td>{getTimeDifferenceByOperationType(item.operationTimes, "Проверка механиком")}</td>
        <td>{getOperationEmployeeName(item.operations, "Проверка механиком")}<br/>Операция {getOperationNormDuration(item.operations, "Проверка механиком")}<br/>Опция {getOptionDuration(item.operations, "Проверка механиком")}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка электронщиком")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка электронщиком")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Проверка механиком"))}</td>
    </tr>





    <tr>
    <td>{getOperationNormValue(item.operations, "Проверка электронщиком")}:00</td>
        <td>{getOptionNormValue(item.operations, "Проверка электронщиком")}</td>
        <td>{getOperationDuration(item.operations, "Проверка электронщиком")}</td>
        {getTimeExceedsNorm(item.operations, "Проверка электронщиком")}
        <td>{getProblemTime(item.operations, "Проверка электронщиком")}</td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка электронщиком")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка электронщиком")}</td>
        <td>{formatDate1(getOperationStartTime(item.operations, "Проверка электронщиком"))}</td>
        <td></td>
        <td></td>
        <td>{getTimeDifferenceByOperationType(item.operationTimes, "Проверка электронщиком")}</td>
        <td>{getOperationEmployeeName(item.operations, "Проверка электронщиком")}<br/>Операция {getOperationNormDuration(item.operations, "Проверка электронщиком")}<br/>Опция {getOptionDuration(item.operations, "Проверка электронщиком")}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка технологом")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка технологом")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Проверка электронщиком"))}</td>
    </tr>




    <tr>
    <td>{getOperationNormValue(item.operations, "Проверка технологом")}:00</td>
        <td>{getOptionNormValue(item.operations, "Проверка технологом")}</td>
        <td>{getOperationDuration(item.operations, "Проверка технологом")}</td>
        {getTimeExceedsNorm(item.operations, "Проверка технологом")}
        <td>{getProblemTime(item.operations, "Проверка технологом")}</td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Проверка технологом")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Проверка технологом")}</td>
        <td>{formatDate1(getOperationStartTime(item.operations, "Проверка технологом"))}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getTimeDifferenceByOperationType(item.operationTimes, "Проверка технологом")}</td>
        <td>{getOperationEmployeeName(item.operations, "Проверка технологом")}<br/>Операция {getOperationNormDuration(item.operations, "Проверка технологом")}<br/>Опция {getOptionDuration(item.operations, "Проверка технологом")}</td>
        <td></td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Выходной контроль")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Выходной контроль")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Проверка технологом"))}</td>
    </tr>




    <tr>
    <td>{getOperationNormValue(item.operations, "Выходной контроль")}:00</td>
    <td>{getOptionNormValue(item.operations, "Выходной контроль")}</td>
    <td>{getOperationDuration(item.operations, "Выходной контроль")}</td>
    {getTimeExceedsNorm(item.operations, "Выходной контроль")}
    <td>{getProblemTime(item.operations, "Выходной контроль")}</td>
    <td>{getForecastDatesPlan(item.forecastDatesPlan, "Выходной контроль")}</td>
    <td>{getForecastDatesStart(item.forecastDatesStart, "Выходной контроль")}</td>
    <td>{formatDate1(getOperationStartTime(item.operations, "Выходной контроль"))}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{getTimeDifferenceByOperationType(item.operationTimes, "Выходной контроль")}</td>
        <td>{getOperationEmployeeName(item.operations, "Выходной контроль")}<br/>Операция {getOperationNormDuration(item.operations, "Выходной контроль")}<br/>Опция {getOptionDuration(item.operations, "Выходной контроль")}</td>
        <td></td>
        <td>{getForecastDatesPlan(item.forecastDatesPlan, "Транспортное положение")}</td>
        <td>{getForecastDatesStart(item.forecastDatesStart, "Транспортное положение")}</td>
        <td>{formatDate1(getOperationStopTime(item.operations, "Выходной контроль"))}</td>
    </tr>




    <tr>
    <td>{getOperationNormValue(item.operations, "Транспортное положение")}:00</td>
    <td>{getOptionNormValue(item.operations, "Транспортное положение")}</td>
    <td>{getOperationDuration(item.operations, "Транспортное положение")}</td>
    {getTimeExceedsNorm(item.operations, "Транспортное положение")}
    <td>{getProblemTime(item.operations, "Транспортное положение")}</td>
    <td>{getForecastDatesPlan(item.forecastDatesPlan, "Транспортное положение")}</td>
    <td>{getForecastDatesStart(item.forecastDatesStart, "Транспортное положение")}</td>
    <td>{formatDate1(getOperationStartTime(item.operations, "Транспортное положение"))}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>{getTimeDifferenceByOperationType(item.operationTimes, "Транспортное положение")}</td>
    <td>{getOperationEmployeeName(item.operations, "Транспортное положение")}<br/>Операция {getOperationNormDuration(item.operations, "Транспортное положение")}<br/>Опция {getOptionDuration(item.operations, "Транспортное положение")}</td>
    <td>{item.extendedTransportPositionDatePlan}</td>
    <td>{item.extendedTransportPositionDate}</td>
    <td>{formatDate1(getOperationStopTime(item.operations, "Транспортное положение"))}</td>
    </tr>


    
    <tr>
        <td></td>
        <td>Отклонение от плана</td>
        {getCompletionPercentageDisplay(item.completionPercentage)}
        <td></td>
        <td>Затрачено часов</td>
        <td>{item.totalDurationSum}</td>
        <td></td>
        <td>{item.totalProblemsNormHours}:00:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Межоперационное ожидание</td>
        <td>{item.positiveInterOperationTimeSum}</td>
        <td></td>
        <td>Итоговое время цикла</td>
        <td>{item.totalSum}</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <br/>
</React.Fragment>

))}
</tbody>
    </table>
    </div>
    </>
  );
}

export default Table;