const fs = require('fs').promises;

const addNewTalker = async (arr) => {
  try {
    await fs.writeFile('src/talker.json', JSON.stringify(arr));
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = addNewTalker;
