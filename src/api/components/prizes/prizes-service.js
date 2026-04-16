const prizesRepository = require('./prizes-repository');

async function getAllPrizes() {
  return prizesRepository.findAll();
}

async function getRemainingKuota() {
  const prizes = await prizesRepository.findAll();

  return prizes.map((p) => ({
    name: p.name,
    remaining: Math.max(0, p.kuota - p.claimed),
  }));
}

module.exports = {
  getAllPrizes,
  getRemainingKuota,
};
