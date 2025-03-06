import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Table from './components/table/table';
import Secondtable from './components/secondtable/secondtable';
import Thirdtable from './components/thirdtable/thirdtable';
const contentMap = {
  content1: <Table />,
  content2: <Secondtable />,
  content3: <Thirdtable />
};
function App() {
  const [activeContent, setActiveContent] = useState('content1');
  const handleButtonClick = (contentId) => {
    setActiveContent(contentId);
  };
  return (
    <div className="App">
      <Header onButtonClick={handleButtonClick} />
      <div>{contentMap[activeContent]}</div>
    </div>
  );
}

export default App;
