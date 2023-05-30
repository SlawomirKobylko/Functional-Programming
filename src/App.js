import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './MyComponents/Login';
import Title from './MyComponents/Title';
import Show from './MyComponents/Show';
import Time from './MyComponents/Time';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Title />
      <Login onLoginSuccess={handleLoginSuccess} />
      {isLoggedIn && <Show />}
      <Time></Time>
    </div>
  );
}

export default App;
