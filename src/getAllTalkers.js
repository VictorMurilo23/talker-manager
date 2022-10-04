const fs = require('fs').promises;

const getAllPeople = async () => {
  try {
    const peopleData = await fs.readFile('src/talker.json');
    return JSON.parse(peopleData);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = getAllPeople;
