const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  card: {
    type: mongoose.Schema.ObjectId,
    ref: 'Card',
  }
});

module.exports = model('Favorite', favoriteSchema);