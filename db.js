const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/Students_data';

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