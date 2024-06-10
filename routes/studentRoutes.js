const express = require('express');
const router = express.Router();
const student = require('./../models/student');

router.get('/', async (req, res) => {
  try {
    const data = await student.find();
    console.log('data fatched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newStudent = new student(data);
    const response = await newStudent.save();
    res.status(200).json(response);
    console.log('Data saved');
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:age', async (req, res) => {
  try {
    const studentAge = req.params.age;
    const response = await student.find({ age: studentAge });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body;
    const response = await student.findByIdAndUpdate(studentId, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      res.status(404).json({ error: 'data not found' });
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const response = await student.findByIdAndDelete(studentId);
    if (!response) {
      res.status(404).json({ error: 'data not found' });
    }
    console.log('data deleted');
    res.status(200).json({ message: 'data delete successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
