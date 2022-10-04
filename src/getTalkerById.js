const getAllPeople = require('./getAllTalkers');

const findById = async (id) => {
  const allPeople = await getAllPeople();
  const person = allPeople.find((element) => element.id === Number(id));
  return person;
};

module.exports = findById;
