import React, { useState, useEffect } from 'react';
import AddButton from './AddButton';

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

const Show = () => {
  const [carList, setCarList] = useState([]);

  const handleAddCar = (car) => {
    setCarList([...carList, car]);
  };

  const handleRemoveCar = () => {
    setCarList(carList.slice(0, -1));
  };

  return (
    <div>
      <ChuckNorrisJoke />
      <AddButton onAddCar={handleAddCar} />
      <button onClick={handleRemoveCar}>Usuń</button>
      <ul>
        {carList.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  );
};

export default Show;