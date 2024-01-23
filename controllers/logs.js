const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index route
router.get('/logs', async (req, res) => {
  try {
    const logs = await Log.find();
    res.render('Index', { logs });
  } catch (error) {
    console.error(error);
    res.send('Error fetching logs');
  }
});

// Other routes...

module.exports = router;
