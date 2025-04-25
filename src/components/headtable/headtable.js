
import '../../styles/headtable.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function Headtable() {
  const [pppData, setPppData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://194.87.56.253:8080/employee-statistics'); 
                setPppData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!pppData) {
        return <div>Loading...</div>;
    }
  return (
    <>
 <tr>
 <th colspan="2">Всего человек</th> 
 <th className="date-cell">Механик <br/>электрон. <br/>технолог <br/>электрик <br/>комплект.</th> 
 <th>{pppData.mechanicCount}<br/>{pppData.electricianCount}<br/>{pppData.technologistCount}<br/>{pppData.electricCount}<br/>{pppData.complectionCount}</th> 
 <th>Занято</th> 
 <th className="date-cell">Механик <br/>электрон.<br/>технолог<br/>электрик <br/>комплект. </th>
 <th className="date-cell">{pppData.mechanicBusyCount}<br/>{pppData.electricianBusyCount}<br/>{pppData.technologistBusyCount}<br/>{pppData.electricBusyCount}<br/>{pppData.complectionBusyCount}</th>  
 <th>Свободно</th> 
 <th className="date-cell">Механик <br/>электрон. <br/>технолог <br/>электрик <br/>комплект.</th>
 <th className="date-cell">{pppData.mechanicFreeCount}<br/>{pppData.electricianFreeCount}<br/>{pppData.technologistFreeCount}<br/>{pppData.electricFreeCount}<br/>{pppData.complectionFreeCount}</th>  
 <th>В работе станков</th> 
 <th>{pppData.machinesInWork}</th> 
 <th>Станки в срок</th> 
 <th className="green">{pppData.machinesOnTime}</th> 
 <th>Станки не в срок</th> 
 <th className="red">{pppData.machinesLate}</th> 
 </tr>
    </>
  );
}

export default Headtable;