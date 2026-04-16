const { mongoose, Users, Prize, Gacha } = require('../models');

const users = [
  {
    email: 'haii@gmail.com',
    password: 'abcdefgh',
    name: 'irene',
    confirm_password: 'abcdefgh',
  },
  {
    email: 'monik@gmail.com',
    password: '12345678',
    name: 'monica',
    confirm_password: '12345678',
  },
  {
    email: 'janee@gmail.com',
    password: 'testestes',
    name: 'Jane Doe',
    confirm_password: 'testestes',
  },
];

const prizes = [
  { name: 'Emas 10 gram', kuota: 1, claimed: 0, probability: 1 },
  { name: 'Smartphone X', kuota: 5, claimed: 0, probability: 5 },
  { name: 'Smartphone Y', kuota: 10, claimed: 0, probability: 10 },
  { name: 'Voucher Rp100.000', kuota: 100, claimed: 0, probability: 30 },
  { name: 'Pulsa 50.000', kuota: 500, claimed: 0, probability: 54 },
];

async function seed() {
  await Users.deleteMany({});
  await Prize.deleteMany({});
  await Gacha.deleteMany({});

  await Users.insertMany(users);
  await Prize.insertMany(prizes);

  // eslint-disable-next-line no-console
  console.log('Seeding selesai dan berhasil!');
  mongoose.connection.close();
}

seed();
