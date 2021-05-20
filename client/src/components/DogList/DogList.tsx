import React, { useEffect } from 'react';
import axios from 'axios';
import { Card } from '..';

export type Dog = {
  name: string;
  breed: string;
  age: number;
};

const DogList = (): JSX.Element => {
  const [dogs, setDogs] = React.useState<Dog[]>([]);

  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await axios.get('http://localhost:3000/dogs');
        const data = response.data;
        setDogs(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDogs();
  }, []);
  return (
    <div>
      {dogs.map((dog, index) => (
        <Card key={index} title={dog.name} />
      ))}
    </div>
  );
};

export default DogList;
