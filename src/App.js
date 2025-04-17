import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Table from './components/table/table';
import Secondtable from './components/secondtable/secondtable';
import Thirdtable from './components/thirdtable/thirdtable';
import Fourtable from './components/fourtable/fourtable';
const contentMap = {
  content2: <Table />,
  content3: <Secondtable />,
  content4: <Thirdtable />,
  content1: <Fourtable/>
};
function App() {
  const [activeContent, setActiveContent] = useState('content1');
  const handleButtonClick = (contentId) => {
    setActiveContent(contentId);
  };
  return (
    <div >
      <Header onButtonClick={handleButtonClick} />
      <div>{contentMap[activeContent]}</div>
    </div>
  );
}

export default App;
