import React, { useState } from 'react';
import AddButton from './AddButton';

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
