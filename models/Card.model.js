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
    enum: ['fire', 'electric', 'water', 'poison', 'grass', 'ice', 'wind', 'flying', 'bug', 'dark', 'dragon', 'fairy', 'fighting', 'ghost', 'ground', 'normal', 'psychic', 'rock', 'steel'],
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