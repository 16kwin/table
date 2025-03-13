import React from 'react';
import '../styles/header.css';

function Header({ onButtonClick }) {
  return (
    <div className="button-container">
        <button onClick={() => onButtonClick('content1')}>First table</button>
        <button onClick={() => onButtonClick('content2')}>Second table</button>
        <button onClick={() => onButtonClick('content3')}>Third table</button>
    </div>
  );
}

export default Header;