const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.DB_URL_LOCAL;
const mongoURL = process.env.DB_URL;
// const mongoURL = 'mongodb+srv://swamivikram058:sDJyfTqGIvrWLOKu@cluster0.xpgwcsb.mongodb.net/';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('connected');
});
db.on('error', (err) => {
  console.log('err:', err);
});
db.on('disconnected', () => {
  console.log('disconnected');
});

module.exports = db;
