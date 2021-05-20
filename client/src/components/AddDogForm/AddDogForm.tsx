import React from 'react';

import { useAppDispatch } from '../../helpers/hooks';
import { addDog } from '../../features/dogs/dogsSlice';

const AddDog = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const [dogName, dogBreed, dogAge] = form.elements;

    dispatch(addDog(dogName.value, dogBreed.value, parseInt(dogAge.value), ''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='dogName'>Name:</label>
        <input type='text' name='dogName' />
      </div>
      <div>
        <label htmlFor='dogBreed'>Breed:</label>
        <input type='text' name='dogBreed' />
      </div>
      <div>
        <label htmlFor='dogAge'>Age:</label>
        <input type='number' name='dogAge' />
      </div>
      <button type='submit'>Save Dog</button>
    </form>
  );
};

export default AddDog;
