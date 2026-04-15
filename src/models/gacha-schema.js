module.exports = (db) =>
  db.model(
    'Gacha',
    db.Schema(
      {
        userId: {
          type: db.Schema.Types.ObjectId,
          ref: 'Users',
          required: true,
        },
        prizeId: { type: db.Schema.Types.ObjectId, ref: 'Prize' },
        isWin: { type: Boolean, default: false },
      },
      { timestamps: true }
    )
  );
