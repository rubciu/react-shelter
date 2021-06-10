import React from "react";

import { useAppDispatch } from "../../helpers/hooks";
import { createDog } from "../../features/dogs/dogsSlice";

const AddDog = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const [dogName, dogBreed, dogAge] = form.elements;
    const dog = {
      name: dogName.value,
      breed: dogBreed.value,
      age: parseInt(dogAge.value),
      addedBy: "admin",
    };

    const dogCreated = (await dispatch(createDog(dog))).payload;

    if (dogCreated) {
      console.log("Dog created", dogCreated);
    } else {
      console.log("Could not be possible to create dog");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dogName">Name:</label>
        <input type="text" name="dogName" />
      </div>
      <div>
        <label htmlFor="dogBreed">Breed:</label>
        <input type="text" name="dogBreed" />
      </div>
      <div>
        <label htmlFor="dogAge">Age:</label>
        <input type="number" name="dogAge" />
      </div>
      <button type="submit">Save Dog</button>
    </form>
  );
};

export default AddDog;
