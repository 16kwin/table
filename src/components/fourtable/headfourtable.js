
import '../../styles/headtable.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function Headfourtable() {
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

 <th>В работе станков</th> 
 <th>{pppData.machinesInWork}</th> 
 <th></th> 
 <th>Станки в срок</th> 
 <th className="green">{pppData.machinesOnTime}</th> 
 <th>Станки не в срок</th> 
 <th className="red">{pppData.machinesLate}</th> 
 <th></th> 
  
 </tr>
    </>
  );
}

export default Headfourtable;