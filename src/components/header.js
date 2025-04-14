import React from 'react';
import '../styles/header.css';

function Header({ onButtonClick }) {
  return (
    <div className="button-container">
        <button onClick={() => onButtonClick('content1')}>Доска производственного анализа</button>
        <button onClick={() => onButtonClick('content2')}>Сводная ведомость выроботки по сотрудникам</button>
        <button onClick={() => onButtonClick('content3')}>Сводная ведомость по потерям производственного времени</button>
        <button onClick={() => onButtonClick('content4')}>Депо</button>
    </div>
  );
}

export default Header;