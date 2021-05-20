const express = require('express');
const router = new express.Router();

const Dog = require('../models/dog');

router.post('/dogs', async (req, res) => {
  const dog = new Dog(req.body);

  try {
    await dog.save();
    res.status(201).send(dog);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find({});
    res.send(dogs);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
