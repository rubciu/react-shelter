const request = require('supertest');
const app = require('../src/app');
const { setupDatabase, dogs } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should signup a new dog', async () => {
  await request(app).post('/dogs').send(dogs[0]).expect(201);
});
