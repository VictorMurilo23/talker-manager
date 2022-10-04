const express = require('express');

const router = express.Router();

const generateToken = require('../generateToken');

router.post('/', async (req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = router;
