const express = require('express');

const router = express.Router();
const getAllPeople = require('../getAllPeople');

router.get('/', async (_req, res) => {
  const people = await getAllPeople();
  res.status(200).json(people);
});

module.exports = router;
