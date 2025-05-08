import React, { useState } from 'react';
import '../styles/login.css'; // Импортируйте CSS файл

const LoginModal = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '123' && password === '123') {
      onLoginSuccess();
      setError('');
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;