const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'vs',
  },
  class: {
    type: [String],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
});

const student = mongoose.model('student', studentSchema);

module.exports = student;
