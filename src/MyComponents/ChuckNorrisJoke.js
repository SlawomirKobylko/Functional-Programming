import React, { useState, useEffect } from 'react';

const ChuckNorrisJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchChuckNorrisJoke();
  }, []);

  const fetchChuckNorrisJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Żart o Chucku Norrisie</h2>
      <p>{joke}</p>
      <button onClick={fetchChuckNorrisJoke}>Pokaż nowy żart</button>
    </div>
  );
};

export default ChuckNorrisJoke;