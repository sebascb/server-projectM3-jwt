const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const cardSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: [true],
  },
  element: {
    type: String,
    required: [true, 'element is required'],
    enum: ['Fire', 'Electric', 'Water', 'Poison', 'Grass', 'Ice', 'Wind', 'Flying', 'Bug', 'Dark', 'Dragon', 'Fairy', 'Fighting', 'Ghost', 'Ground', 'Normal', 'Psychic', 'Rock', 'Steel'],
  },
  description: {
    type: String,
    required: [true],
  },
  attack: {
    type: Number,
    required: [true, 'attack is required'],
  },
  hp: {
    type: Number,
  },
  ability: {
    type: String,
    required: [true, 'ability is required'],
  },
});

cardSchema.pre('save', async function (next) {
  if(this.attack + this.hp <= 100){
    next();
  } else {
    throw new Error('Danger! Attack and HP in Pokkemon Card cannot be higher than 100!');
  }
});

module.exports = model('Card', cardSchema);