import React, { useState } from 'react';
import Delete from './Delete';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Dodajemy nowy stan dla zalogowania

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Przykładowa logika uwierzytelniania
    if (username === 'admin' && password === 'password') {
      setLoginMessage('Zalogowano pomyślnie!');
      setLoginSuccess(true);
      setIsLoggedIn(true); // Ustawiamy isLoggedIn na true po poprawnym zalogowaniu
    } else {
      setLoginMessage('Błędny login lub hasło!');
      setLoginSuccess(false);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="username">Login:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Login"
          />
        </div>
        <div>
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Hasło"
          />
        </div>
        <button type="submit">Zaloguj</button>
        <p className={loginSuccess ? 'success-message' : 'error-message'}>
          {loginMessage}
        </p>
      </form>
      {isLoggedIn && <Delete />} {/* Wyświetlanie przycisku tylko po zalogowaniu */}
    </div>
  );
};

export default Login;
