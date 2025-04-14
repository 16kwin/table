
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
 <th></th> 
 <th></th>
 <th>Занято</th> 
 <th className="date-cell">Механик {pppData.mechanicBusyCount}<br/>электрон.{pppData.electricianBusyCount}<br/>технолог {pppData.technologistBusyCount}<br/>электрик {pppData.electricBusyCount}<br/>комплект. {pppData.complectionBusyCount}</th> 
 <th>Свободно</th> 
 <th className="date-cell">Механик {pppData.mechanicFreeCount}<br/>электрон. {pppData.electricianFreeCount}<br/>технолог {pppData.technologistFreeCount}<br/>электрик {pppData.electricFreeCount}<br/>комплект. {pppData.complectionFreeCount}</th> 
 <th></th> 
 <th></th> 
 <th>В работе станков</th> 
 <th>{pppData.machinesInWork}</th> 
 <th></th> 
 <th>Станки в срок</th> 
 <th className="green">{pppData.machinesOnTime}</th> 
 <th>Станки не в срок</th> 
 <th className="red">{pppData.machinesLate}</th> 
 <th></th> 
 <th></th> 
 <th></th> 
 <th></th> 
 <th></th> 
 </tr>
    </>
  );
}

export default Headtable;