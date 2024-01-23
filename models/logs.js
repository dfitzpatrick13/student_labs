const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index route
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.render('Index', { logs });
  } catch (error) {
    console.error(error);
    res.send('Error fetching logs');
  }
});

// New route
router.get('/new', (req, res) => {
  res.render('New');
});

// Create route
router.post('/', async (req, res) => {
  try {
    const createdLog = await Log.create(req.body);
    res.redirect(`/logs/${createdLog._id}`);
  } catch (error) {
    console.error(error);
    res.send('Error creating log');
  }
});

// Show route
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('Show', { log });
  } catch (error) {
    console.error(error);
    res.send('Error fetching log');
  }
});

// Other routes...

module.exports = router;
