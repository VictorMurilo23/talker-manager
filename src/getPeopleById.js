const getAllPeople = require('./getAllPeople');

const findById = async (id) => {
  const allPeople = await getAllPeople();
  const person = allPeople.find((element) => element.id === Number(id));
  return person;
};

module.exports = findById;
