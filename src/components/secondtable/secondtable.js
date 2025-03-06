import '../../styles/secondtable.css';

function Secondtable() {
  return (
    <>
 <tr>
    <th>Сотрудник</th> 
 <th>Количество выполненных этапов</th> 
 <th>Количество этапов выполненных в срок</th> 
 <th>Доля этапов выполненных в срок</th> 
 <th>Нормативное время работы</th> 
 <th>Фактическое время работы</th> 
 <th>Коэффициент выполнености норм</th> 
 <th>Фонд рабочего времени</th> 
 <th>Простои сотрудника</th> 
 </tr>
 <tr>
<td>1</td>
<td>2</td>
<td>3</td>
<td>2//3</td>
<td>5</td>
<td>6</td>
<td>5//6</td>
<td>8</td>
<td>8//6</td>

    </tr>
    </>
  );
}

export default Secondtable;