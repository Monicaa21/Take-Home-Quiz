const { Prize } = require('../../../models');

async function findAvailable() {
  return Prize.find({
    $expr: { $lt: ['$claimed', '$quota'] },
  });
}

async function create(data) {
  return Prize.create(data);
}

async function updateClaimed(id) {
  return Prize.findByIdAndUpdate(id, { $inc: { claimed: 1 } }, { new: true });
}

module.exports = {
  findAvailable,
  create,
  updateClaimed,
};
