const express = require('express');
const router = express.Router();
const Log = require('../models/logs');


// Put route
router.put('/:id', async (req, res) => {
  try {
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect(`/logs/${updatedLog._id}`);
  } catch (error) {
    console.error(error);
    res.send('Error updating log');
  }
});

module.exports = router;
