require('dotenv/config');
const { default: mongoose } = require("mongoose")
const Card = require('../models/Card.model');
const User = require('../models/User.model');
const cards = [
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/charmander.png",
    "name": "Charmander",
    "element": "Fire",
    "description": "Prefers hot things. They say that when it rains steam comes out of the tip of its tail.",
    "attack": 52,
    "hp": 39,
    "ability": "Flames Sea"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
    "name": "Pikachu",
    "element": "Electric",
    "description": "When several of these POKKéMON gather, their electricity could build and cause lightning storms.",
    "attack": 55,
    "hp": 35,
    "ability": "Static"
  },
  {
    "image": "https://img.pokemondb.net/sprites/go/normal/zubat.png",
    "name": "Zubat",
    "element": "Poison",
    "description": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
    "attack": 45,
    "hp": 40,
    "ability": "Inner Focus"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
    "name": "Bulbasaur",
    "element": "Grass",
    "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKKéMON.",
    "attack": 49,
    "hp": 45,
    "ability": "Overgrow"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
    "name": "Squirtle",
    "element": "Water",
    "description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "attack": 44,
    "hp": 48,
    "ability": "Torrent"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/weedle.png",
    "name": "Weedle",
    "element": "Poison",
    "description": "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
    "attack": 35,
    "hp": 40,
    "ability": "Shield Dust"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/rattata.png",
    "name": "Rattata",
    "element": "Normal",
    "description": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
    "attack": 56,
    "hp": 30,
    "ability": "Run Away"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/ekans.png",
    "name": "Ekans",
    "element": "Poison",
    "description": "Moves silently and stealthily. Eats the eggs of birds.",
    "attack": 60,
    "hp": 35,
    "ability": "Intimidate"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/vulpix.png",
    "name": "Pesterix",
    "element": "Fire",
    "description": "When she sleeps she is adorable but if you wake her up she transforms",
    "attack": 50,
    "hp": 50,
    "ability": "Little Monster"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/oddish.png",
    "name": "Oddish",
    "element": "Grass",
    "description": "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
    "attack": 50,
    "hp": 45,
    "ability": "Chlorophyll"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/caterpie.png",
    "name": "Caterpie",
    "element": "Bug",
    "description": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "attack": 30,
    "hp": 45,
    "ability": "Shield Dust"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/pidgey.png",
    "name": "Pidgey",
    "element": "Flying",
    "description": "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    "attack": 45,
    "hp": 40,
    "ability": "Keen Eye"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/diglett.png",
    "name": "Diglett",
    "element": "Ground",
    "description": "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
    "attack": 55,
    "hp": 10,
    "ability": "Sand Veil"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/meowth.png",
    "name": "Meowth",
    "element": "Normal",
    "description": "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
    "attack": 45,
    "hp": 40,
    "ability": "Pickup"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/poliwag.png",
    "name": "Poliwag",
    "element": "Water",
    "description": "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
    "attack": 50,
    "hp": 40,
    "ability": "Water Abosorb"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/abra.png",
    "name": "Abra",
    "element": "Psychic",
    "description": "",
    "attack": 20,
    "hp": 25,
    "ability": "Synchronize"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/tentacool.png",
    "name": "Tentacool",
    "element": "Water",
    "description": "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
    "attack": 40,
    "hp": 40,
    "ability": "Clear Body"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/magnemite.png",
    "name": "Magnemite",
    "element": "electric",
    "description": "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
    "attack": 35,
    "hp": 25,
    "ability": "Magnet Pull"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/shellder.png",
    "name": "Shellder",
    "element": "Water",
    "description": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
    "attack": 65,
    "hp": 30,
    "ability": "Shell Armor"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/gastly.png",
    "name": "Gastly",
    "element": "Ghost",
    "description": "Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
    "attack": 35,
    "hp": 30,
    "ability": "Levitate"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/onix.png",
    "name": "Onix",
    "element": "Rock",
    "description": "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
    "attack": 45,
    "hp": 35,
    "ability": "Rock Head"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/voltorb.png",
    "name": "Voltorb",
    "element": "Electric",
    "description": "Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
    "attack": 30,
    "hp": 40,
    "ability": "Soundproof"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/exeggcute.png",
    "name": "Exeggcute",
    "element": "Grass",
    "description": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
    "attack": 40,
    "hp": 60,
    "ability": "Chlorophyll"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/cubone.png",
    "name": "Cubone",
    "element": "Ground",
    "description": "Because it never removes its skull helmet, no one has ever seen this POKéMON’s real face.",
    "attack": 50,
    "hp": 50,
    "ability": "Lightning Rod"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/horsea.png",
    "name": "Horsea",
    "element": "Water",
    "description": "Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
    "attack": 40,
    "hp": 30,
    "ability": "Swift Swim"
  },
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