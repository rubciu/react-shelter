const Dog = require('../../src/models/dog');

const setupDatabase = async () => {
  await Dog.deleteMany();
};

const dogs = [
  {
    name: 'Max',
    breed: 'French buldog',
    age: 5,
  },
];

module.exports = {
  setupDatabase,
  dogs,
};
