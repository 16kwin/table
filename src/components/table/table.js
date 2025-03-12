import Headtable from "../headtable/headtable.js"
import '../../styles/table.css';
import React, { useState, useEffect } from 'react';
function NewTable ({bd}) {
    return (
        <>
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
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{bd.plan_start}</td>
        <td>{bd.forecast_start}</td>
        <td>{bd.fact_start}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{bd.plan_stop}</td>
        <td>{bd.forecast_stop}</td>
        <td>{bd.fact_stop}</td>
        <td rowspan="8">{bd.plan_shipment}</td>
        <td rowspan="8">{bd.forecast_shipment}</td>
        <td rowspan="8">{bd.fact_shipment}</td>
        

    </tr>
    <tr>
        <td rowspan="7">{bd.status}</td>
        <td rowspan="7">{bd.transaction}</td>
        <td rowspan="7">{bd.plan}:00:00</td>
        <td>{bd.operation1}:00</td>
        <td>{bd.option1}:00</td>
        <td>4:00</td>
        <td>100%</td>
        <td>{bd.problem1}:00</td>
        <td>{bd.plan_start1}</td>
        <td>{bd.forecast_start1}</td>
        <td>{bd.fact_start1}</td>
        <td>ФИО1 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>31.01.2025</td>
        <td>31.01.2025 15.30</td>

    </tr>
    <tr>
        <td>{bd.operation2}:00</td>
        <td>{bd.option2}:00</td>
        <td>6:00</td>
        <td>100%</td>
        <td>{bd.problem2}:00</td>
        <td>15.02.2025</td>
        <td>03.02.2025</td>
        <td>03.02.2025 9:00</td>
        <td>0:20</td>
        <td>ФИО2 часов 6:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>01.02.2025</td>
        <td>01.02.2025 15.30</td>
    </tr>
    <tr>
    <td>{bd.operation3}:00</td>
        <td>{bd.option3}:00</td>
        <td>27:00:00</td>
        <td>139%</td>
        <td>{bd.problem3}:00</td>
        <td>16.02.2025</td>
        <td>07.02.2025</td>
        <td>05.02.2025 9:00</td>
        <td></td>
        <td>0:40</td>
        <td>ФИО3 часов 15:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>04.02.2025</td>
        <td>05.02.2025 15.30</td>

    </tr>
    <tr>
    <td>{bd.operation4}:00</td>
        <td>{bd.option4}:00</td>
        <td>18:00:00</td>
        <td>94%</td>
        <td>{bd.problem4}:00</td>
        <td>20.02.2025</td>
        <td>07.02.2025</td>
        <td>08.02.2025 9:00</td>
        <td></td>
        <td></td>
        <td>20:20</td>
        <td>ФИО4 часов 10:00 Опции: 8:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>04.02.2025</td>
        <td>08.02.2025 15.30</td>

    </tr>
    <tr>
    <td>{bd.operation5}:00</td>
        <td>{bd.option5}:00</td>
        <td>2:00</td>
        <td>100%</td>
        <td>{bd.problem5}:00</td>
        <td>22.02.2025</td>
        <td>17.02.2025</td>
        <td>09.02.2025 9:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО5 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>05.02.2025</td>
        <td>09.02.2025 15.30</td>

    </tr>
    <tr>
    <td>{bd.operation6}:00</td>
        <td>{bd.option6}:00</td>
        <td>4:00</td>
        <td>100%</td>
        <td>{bd.problem6}:00</td>
        <td>03.03.2025</td>
        <td>10.02.2025</td>
        <td>10.02.2025 9:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>0:20</td>
        <td>ФИО6 часов 5:30 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td>06.02.2025</td>
        <td>10.02.2025 15.30</td>

    </tr>
    <tr>
    <td>{bd.operation7}:00</td>
        <td>{bd.option7}:00</td>
        <td>8:00</td>
        <td>100%</td>
        <td>{bd.problem7}:00</td>
        <td>04.03.2025</td>
        <td>11.02.2025</td>
        <td>11.02.2025 9:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО7 часов 5:00 Опции: 15:00</td>
        <td>05.03.2025</td>
        <td>08.02.2025</td>
        <td>011.02.2025 15.30</td>
    </tr>
    <tr>
        <td></td>
        <td>Отклонение от плана</td>
        <td>93%</td>
        <td></td>
        <td>Затрачено часов</td>
        <td>96:00:00</td>
        <td>105%</td>
        <td>5:00:00</td>
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
    );
}



function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Добавим состояние для отслеживания загрузки
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
    
    {data.map((item) => (
      <>
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
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{item.planDataStart1C}</td>
        <td>{item.forecastDataStart1C}</td>
        <td>{item.factDataStart1C}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>{item.planDataStop1C}</td>
        <td>{item.forecastDataStop1C}</td>
        <td>{item.factDataStop1C}</td>
        <td rowspan="8">{item.planDataShipment1C}</td>
        <td rowspan="8">{item.forecastDataShipment1C}</td>
        <td rowspan="8">{item.factDataShipment1C}</td>
        

    </tr>
    <tr>
        <td rowspan="7">{item.status}</td>
        <td rowspan="7">{item.transaction}</td>
        <td rowspan="7">{item.planPpp}:00:00</td>
        <td>:00</td>
        <td>{item.optionNorm1}:00</td>
        <td>4:00</td>
        <td>100%</td>
        <td>{item.problemTime1}:00</td>
        <td></td>
        <td></td>
        <td>{item.startTimePpp1}</td>
        <td>ФИО1 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>31.01.2025</td>
        <td>{item.stopTimePpp1}</td>

    </tr>
    <tr>
        <td>:00</td>
        <td>{item.optionNorm2}:00</td>
        <td>6:00</td>
        <td>100%</td>
        <td>{item.problemTime2}:00</td>
        <td>15.02.2025</td>
        <td>03.02.2025</td>
        <td>{item.startTimePpp2}</td>
        <td>0:20</td>
        <td>ФИО2 часов 6:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>01.02.2025</td>
        <td>{item.stopTimePpp2}</td>
    </tr>
    <tr>
    <td>:00</td>
        <td>{item.optionNorm3}:00</td>
        <td>27:00:00</td>
        <td>139%</td>
        <td>{item.problemTime3}:00</td>
        <td>16.02.2025</td>
        <td>07.02.2025</td>
        <td>{item.startTimePpp3}</td>
        <td></td>
        <td>0:40</td>
        <td>ФИО3 часов 15:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>04.02.2025</td>
        <td>{item.stopTimePpp3}</td>

    </tr>
    <tr>
    <td>:00</td>
        <td>{item.optionNorm4}:00</td>
        <td>18:00:00</td>
        <td>94%</td>
        <td>{item.problemTime4}:00</td>
        <td>20.02.2025</td>
        <td>07.02.2025</td>
        <td>{item.startTimePpp4}</td>
        <td></td>
        <td></td>
        <td>20:20</td>
        <td>ФИО4 часов 10:00 Опции: 8:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>04.02.2025</td>
        <td>{item.stopTimePpp4}</td>

    </tr>
    <tr>
    <td></td>
        <td>{item.optionNorm5}:00</td>
        <td>2:00</td>
        <td>100%</td>
        <td>{item.problemTime5}:00</td>
        <td>22.02.2025</td>
        <td>17.02.2025</td>
        <td>{item.startTimePpp5}</td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО5 часов 4:00 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>05.02.2025</td>
        <td>{item.stopTimePpp5}</td>

    </tr>
    <tr>
    <td>:00</td>
        <td>{item.optionNorm6}:00</td>
        <td>4:00</td>
        <td>100%</td>
        <td>{item.problemTime6}:00</td>
        <td>03.03.2025</td>
        <td>10.02.2025</td>
        <td>{item.startTimePpp6}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>0:20</td>
        <td>ФИО6 часов 5:30 Опции: 15:00</td>
        <td></td>
        <td></td>
        <td>06.02.2025</td>
        <td>{item.stopTimePpp6}</td>

    </tr>
    <tr>
    <td>:00</td>
        <td>{item.optionNorm7}:00</td>
        <td>8:00</td>
        <td>100%</td>
        <td>{item.problemTime7}:00</td>
        <td>04.03.2025</td>
        <td>11.02.2025</td>
        <td>{item.startTimePpp7}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1:20</td>
        <td>ФИО7 часов 5:00 Опции: 15:00</td>
        <td>05.03.2025</td>
        <td>08.02.2025</td>
        <td>{item.stopTimePpp7}</td>
    </tr>
    <tr>
        <td></td>
        <td>Отклонение от плана</td>
        <td>93%</td>
        <td></td>
        <td>Затрачено часов</td>
        <td>96:00:00</td>
        <td>105%</td>
        <td>5:00:00</td>
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