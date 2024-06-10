const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const studentRouter = require('./routes/studentRoutes');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/student', studentRouter);


app.listen(PORT, () => {
  console.log('running on port 3000');
});
