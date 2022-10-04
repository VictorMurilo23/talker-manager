const express = require('express');

const router = express.Router();
const getAllPeople = require('../getAllPeople');
const findById = require('../getPeopleById');

router.get('/', async (_req, res) => {
  const allPeople = await getAllPeople();
  res.status(200).json(allPeople);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await findById(id);

  if (person) {
    return res.status(200).json(person);
  }
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = router;
