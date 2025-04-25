
import '../../styles/fourtable.css';
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
 <tr className="tr">

 <th className="th">В работе станков</th> 
 <th className="th">{pppData.machinesInWork}</th> 
 <th className="th">Станки в срок</th> 
 <th className="green th">{pppData.machinesOnTime}</th> 
 <th className="th">Станки не в срок</th> 
 <th className="red th">{pppData.machinesLate}</th> 
  
 </tr>
    </>
  );
}

export default Headfourtable;