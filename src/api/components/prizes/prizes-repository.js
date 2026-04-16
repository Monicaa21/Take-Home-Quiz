const { Prize } = require('../../../models');

async function create(data) {
  return Prize.create(data);
}

async function updateClaimed(id) {
  return Prize.findByIdAndUpdate(id, { $inc: { claimed: 1 } }, { new: true });
}

async function findAll() {
  return Prize.find();
}

module.exports = {
  create,
  updateClaimed,
  findAll,
};
