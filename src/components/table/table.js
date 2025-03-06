import Headtable from "../headtable/headtable.js"
import '../../styles/table.css';

function Table() {
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
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>13.02.2025</td>
        <td>14.02.2025</td>
        <td>30.01.2025</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>18.02.2025</td>
        <td>#######</td>
        <td>18.02.2025</td>
        <td rowspan="8">10.03.2025</td>
        <td rowspan="8">18.02.2025</td>
        <td rowspan="8">18.02.2025</td>
        

    </tr>
    <tr>
        <td rowspan="7">В работе</td>
        <td rowspan="7">25_002</td>
        <td rowspan="7">64:00:00</td>
        <td>8:00</td>
        <td></td>
        <td>4:00</td>
        <td>100%</td>
        <td>0:00</td>
        <td>14.02.2025</td>
        <td>31.01.2025</td>
        <td>02.02.2025 9:30</td>
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
        <td>8:00</td>
        <td></td>
        <td>6:00</td>
        <td>100%</td>
        <td>0:00</td>
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
    <td>16:00</td>
        <td>16:00</td>
        <td>27:00:00</td>
        <td>139%</td>
        <td>4:00</td>
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
    <td>8:00</td>
        <td>8:00</td>
        <td>18:00:00</td>
        <td>94%</td>
        <td>1:00</td>
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
    <td>2:00</td>
        <td></td>
        <td>2:00</td>
        <td>100%</td>
        <td>0:00</td>
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
    <td>8:00</td>
        <td></td>
        <td>4:00</td>
        <td>100%</td>
        <td>0:00</td>
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
    <td>8:00</td>
        <td></td>
        <td>8:00</td>
        <td>100%</td>
        <td>0:00</td>
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

    </table>
    </>
  );
}

export default Table;