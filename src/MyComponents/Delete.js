import React, { useState } from 'react';
import AddButton from './AddButton';
import ChuckNorrisJoke from './ChuckNorrisJoke';

const Delete = () => {
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

export default Delete;