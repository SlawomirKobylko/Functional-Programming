import React, { useState } from 'react';

const AddButton = ({ onAddCar }) => {
  const [newCar, setNewCar] = useState('');

  const handleAddCar = () => {
    if (newCar.trim() !== '') {
      onAddCar(newCar);
      setNewCar('');
    }
  };

  const handleNewCarChange = (event) => {
    setNewCar(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newCar}
        onChange={handleNewCarChange}
        placeholder="Nowy element"
      />
      <button onClick={handleAddCar}>Dodaj</button>
    </div>
  );
};

export default AddButton;