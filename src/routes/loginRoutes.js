const express = require('express');

const router = express.Router();
const validateLogin = require('../middlewares/validateLogin');

const generateToken = require('../generateToken');

router.post('/', validateLogin, async (_req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = router;
