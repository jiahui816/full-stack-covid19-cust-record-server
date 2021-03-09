const { Router } = require('express');

const customerLogEntry = require('../models/customerLogEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await customerLogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const logEntry = new customerLogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
