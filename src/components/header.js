import React from 'react';
import '../styles/header.css';

function Header({ onButtonClick }) {
  return (
    <div className="button-container">
        <button onClick={() => onButtonClick('content1')}>Депо</button>
        <button onClick={() => onButtonClick('content2')}>Доска производственного анализа</button>
        <button onClick={() => onButtonClick('content3')}>Сводная ведомость выработки по сотрудникам</button>
        <button onClick={() => onButtonClick('content4')}>Сводная ведомость по потерям производственного времени</button>
    </div>
  );
}

export default Header;