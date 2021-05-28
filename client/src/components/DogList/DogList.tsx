import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { fetchDogs, selectAllDogs } from '../../features/dogs/dogsSlice';

import { Card } from '..';

export type Dog = {
  name: string;
  breed: string;
  age: number;
};

const DogList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const dogs = useAppSelector(selectAllDogs);
  const dogsStatus = useAppSelector((state) => state.dogs.status);

  useEffect(() => {
    if (dogsStatus === 'idle') {
      dispatch(fetchDogs());
    }
  }, [dogsStatus, dispatch]);

  let content;
  if (dogsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (dogsStatus === 'succeeded') {
    content = dogs.map((dog, index) => <Card key={index} title={dog.name} />);
  } else if (dogsStatus === 'failed') {
    content = <div>Something has failed, please try again later!</div>;
  }

  return (
    <div>
      <h1>Dogs</h1>
      <h3>Welcome to the list of dogs</h3>
      {content}
    </div>
  );
};

export default DogList;
