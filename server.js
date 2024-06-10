const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const studentRouter = require('./routes/studentRoutes');
app.use(bodyParser.json());

app.use('/student', studentRouter);

app.listen('3000', () => {
  console.log('running on port 3000');
});
