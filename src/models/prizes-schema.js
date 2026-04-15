module.exports = (db) =>
  db.model(
    'Prize',
    db.Schema({
      name: String,
      kuota: Number,
      claimed: Number,
      probability: Number,
    })
  );
