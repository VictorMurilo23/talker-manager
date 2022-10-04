const express = require('express');

const router = express.Router();
const changeTalkerFile = require('../changeTalkerFile');
const validateToken = require('../middlewares/validateToken');
const {
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerWatched,
  validateTalkerRate,
} = require('../middlewares/validateTalker');
const getAllTalkers = require('../getAllTalkers');
const findTalkerById = require('../getTalkerById');

router.post(
  '/',
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerRate,
  validateTalkerWatched,
  async (req, res) => {
    const allTalkers = await getAllTalkers();
    req.body.id = allTalkers.length + 1;
    await changeTalkerFile([...allTalkers, req.body]);
    return res.status(201).json(req.body);
  },
);

router.get('/', async (_req, res) => {
  const allPeople = await getAllTalkers();
  res.status(200).json(allPeople);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const person = await findTalkerById(id);

  if (person) {
    return res.status(200).json(person);
  }
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.put(
  '/:id',
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  validateTalkerRate,
  validateTalkerWatched,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const allTalkers = await getAllTalkers();
    const newtal = allTalkers.reduce((acc, cur) => {
      if (cur.id === Number(id)) {
        const newCur = { ...cur, name, age, talk: { watchedAt, rate } };
        acc.push(newCur);
      } else {
        acc.push(cur);
      }
      return acc;
    }, []);
    req.body.id = Number(id);
    changeTalkerFile(newtal);
    return res.status(200).json(req.body);
  },
);

module.exports = router;
