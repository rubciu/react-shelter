require('./db/mongoose');

const express = require('express');
const cors = require('cors');

const dogRouter = require('./routers/dog');
const userRouter = require('./routers/user');

const app = express();

app.use(express.json());
app.use(cors());
app.use(dogRouter);
app.use(userRouter);

module.exports = app;
