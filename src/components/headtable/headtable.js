
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
 <th>Механик <br/>электронщик <br/>технолог <br/>электрик<br/> комплектовщик</th> 
 <th>{pppData.mechanicCount}<br/>{pppData.electricianCount}<br/>{pppData.technologistCount}<br/>{pppData.electricCount}<br/>{pppData.complectionCount}</th> 
 <th></th> 
 <th></th>
 <th>Занято</th> 
 <th>{pppData.mechanicBusyCount}<br/>{pppData.electricianBusyCount}<br/>{pppData.technologistBusyCount}<br/>{pppData.electricBusyCount}<br/>{pppData.complectionBusyCount}</th> 
 <th>Свободно</th> 
 <th>{pppData.mechanicFreeCount}<br/>{pppData.electricianFreeCount}<br/>{pppData.technologistFreeCount}<br/>{pppData.electricFreeCount}<br/>{pppData.complectionFreeCount}</th> 
 <th></th> 
 <th></th> 
 <th>В работе</th> 
 <th>{pppData.machinesInWork}</th> 
 <th></th> 
 <th>Станки в срок</th> 
 <th>{pppData.machinesOnTime}</th> 
 <th>Станки не в срок</th> 
 <th>{pppData.machinesLate}</th> 
 <th></th> 
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