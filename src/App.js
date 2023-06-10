import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './MyComponents/Login';
import Title from './MyComponents/Title';
import Show from './MyComponents/Show';
import Time from './MyComponents/Time';
import ChuckNorrisJoke from './MyComponents/ChuckNorrisJoke';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Title />
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Show />
          <ChuckNorrisJoke />
        </>
      )}
      <Time />
    </div>
  );
}

export default App;