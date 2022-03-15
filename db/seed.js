require('dotenv/config');
const { default: mongoose } = require("mongoose")
const Card = require('../models/Card.model');
const User = require('../models/User.model');
const cards = [
  {
    "image": "https://img.pokemondb.net/artwork/large/charmander.jpg",
    "name": "Charmander",
    "element": "fire",
    "description": "Prefers hot things. They say that when it rains steam comes out of the tip of its tail.",
    "attack": 52,
    "hp": 39,
    "ability": "Flames Sea"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/pikachu.jpg",
    "name": "Pikachu",
    "element": "electric",
    "description": "When several of these POKKéMON gather, their electricity could build and cause lightning storms.",
    "attack": 55,
    "hp": 35,
    "ability": "Static"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/zubat.jpg",
    "name": "Zubat",
    "element": "poison",
    "description": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
    "attack": 45,
    "hp": 40,
    "ability": "Inner Focus"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/bulbasaur.jpg",
    "name": "Bulbasaur",
    "element": "grass",
    "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKKéMON.",
    "attack": 49,
    "hp": 45,
    "ability": "Overgrow"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/squirtle.jpg",
    "name": "Squirtle",
    "element": "water",
    "description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "attack": 44,
    "hp": 48,
    "ability": "Torrent"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/weedle.jpg",
    "name": "Weedle",
    "element": "poison",
    "description": "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
    "attack": 35,
    "hp": 40,
    "ability": "Shield Dust"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/rattata.jpg",
    "name": "Rattata",
    "element": "normal",
    "description": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
    "attack": 56,
    "hp": 30,
    "ability": "Run Away"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/ekans.jpg",
    "name": "Ekans",
    "element": "poison",
    "description": "Moves silently and stealthily. Eats the eggs of birds.",
    "attack": 60,
    "hp": 35,
    "ability": "Intimidate"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/vulpix.jpg",
    "name": "Pesterix",
    "element": "fire",
    "description": "When she sleeps she is adorable but if you wake her up she transforms",
    "attack": 50,
    "hp": 50,
    "ability": "Little Monster"
  },
  {
    "image": "https://img.pokemondb.net/artwork/large/oddish.jpg",
    "name": "Oddish",
    "element": "grass",
    "description": "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
    "attack": 50,
    "hp": 45,
    "ability": "Chlorophyll"
  }
];
mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    return await Card.deleteMany({});
  })
  .then(() => {
    const cardsUpdated = cards.map(card => ({ ...card, user: '6228ce8d19f7240075906e70' }));
    console.log(cardsUpdated);
    return Card.insertMany(cardsUpdated);
  })
  .then(cards => {
    console.log(`${cards.length} cards insertadas con exito`);
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .then(() => {
    console.log('conection closed');
  });