import React, { useState, useEffect } from 'react';
import styles from 'App.module.scss';
import CheckboxWithLabel from '../CheckboxWithLabel/CheckboxWithLabel';

const App = (): JSX.Element => {
  const [dogs, setDogs] = React.useState<string[]>([]);

  useEffect(() => {
    async function fetchDogs() {
      const response = await window.fetch('http://localhost:3000/dogs');
      const data = await response.json();
      setDogs(data);
    }
    fetchDogs();
  }, []);

  return (
    <div className='App shelter'>
      <h1>React Shelter</h1>
      <ul>
        {dogs.map((dog: any) => (
          <li key={dog.name}>{dog.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
