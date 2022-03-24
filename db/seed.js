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
    "description": "Using its ability to read minds, it will identify impending danger and TELEPORT to safety.",
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
    "element": "Electric",
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
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/staryu.png",
    "name": "Staryu",
    "element": "Water",
    "description": "An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
    "attack": 45,
    "hp": 30,
    "ability": "Illuminate"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/mr-mime.png",
    "name": "Mr. Mime",
    "element": "Psychic",
    "description": "If interrupted while it is miming, it will slap around the offender with its broad hands.",
    "attack": 45,
    "hp": 40,
    "ability": "Soundproof"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/magikarp.png",
    "name": "Magikarp",
    "element": "Water",
    "description": "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
    "attack": 10,
    "hp": 20,
    "ability": "Swift Swim"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/ditto.png",
    "name": "Ditto",
    "element": "Normal",
    "description": "Capable of copying an enemy’s genetic code to instantly transform itself into a duplicate of the enemy.",
    "attack": 48,
    "hp": 48,
    "ability": "Limber"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/omanyte.png",
    "name": "Omanyte",
    "element": "Rock",
    "description": "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
    "attack": 40,
    "hp": 35,
    "ability": "Swift Swim"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/mewtwo.png",
    "name": "Mewtwo",
    "element": "Psychic",
    "description": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    "attack": 60,
    "hp": 40,
    "ability": "Insomnia"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/mew.png",
    "name": "Mew",
    "element": "Psychic",
    "description": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    "attack": 50,
    "hp": 50,
    "ability": "Synchronize"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/chikorita.png",
    "name": "Chikorita",
    "element": "Grass",
    "description": "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up the sun’s rays.",
    "attack": 49,
    "hp": 45,
    "ability": "Overgrow"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/cyndaquil.png",
    "name": "Cyndaquil",
    "element": "Fire",
    "description": "It is timid, and always curls itself up in a ball. If attacked, it flares up its back for protection.",
    "attack": 52,
    "hp": 39,
    "ability": "Blaze"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/sentret.png",
    "name": "Sentret",
    "element": "Normal",
    "description": "	A very cautious POKéMON, it raises itself up using its tail to get a better view of its surroundings.",
    "attack": 46,
    "hp": 39,
    "ability": "Run Away"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/hoothoot.png",
    "name": "Hoothoot",
    "element": "Flying",
    "description": "	It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
    "attack": 30,
    "hp": 60,
    "ability": "Insomnia"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/ledyba.png",
    "name": "Ledyba",
    "element": "Bug",
    "description": "It is very timid. It will be afraid to move if it is alone. But it will be active if it is in a group.",
    "attack": 20,
    "hp": 40,
    "ability": "Swarm"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/ledian.png",
    "name": "Ledian",
    "element": "Bug",
    "description": "When the stars flicker in the night sky, it flutters about, scattering a glowing powder.",
    "attack": 35,
    "hp": 55,
    "ability": "Swarm"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/spinarak.png",
    "name": "Spinarak",
    "element": "Poison",
    "description": "It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.",
    "attack": 50,
    "hp": 30,
    "ability": "Swarm"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/pichu.png",
    "name": "Pichu",
    "element": "Electric",
    "description": "It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.",
    "attack": 40,
    "hp": 20,
    "ability": "Static"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/cleffa.png",
    "name": "Cleffa",
    "element": "Fairy",
    "description": "Because of its unusual, star-like silhouette, people believe that it came here on a meteor.",
    "attack": 25,
    "hp": 50,
    "ability": "Cute Charm"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/togepi.png",
    "name": "Togepi",
    "element": "Fairy",
    "description": "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
    "attack": 20,
    "hp": 35,
    "ability": "Hustle"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/togetic.png",
    "name": "Togetic",
    "element": "Fairy",
    "description": "	They say that it will appear before kindhearted, caring people and shower them with happiness.",
    "attack": 40,
    "hp": 55,
    "ability": "Hustle"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/natu.png",
    "name": "Natu",
    "element": "Flying",
    "description": "Because its wings aren’t yet fully grown, it has to hop to get around. It is always staring at something.",
    "attack": 50,
    "hp": 40,
    "ability": "Synchronize"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/mareep.png",
    "name": "Mareep",
    "element": "Electric",
    "description": "If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.",
    "attack": 40,
    "hp": 55,
    "ability": "Static"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/marill.png",
    "name": "Marill",
    "element": "Water",
    "description": "The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.",
    "attack": 20,
    "hp": 70,
    "ability": "Thick Fat"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/hoppip.png",
    "name": "Hoppip",
    "element": "Grass",
    "description": "To keep from being blown away by the wind, they gather in clusters. They do enjoy gentle breezes, though.",
    "attack": 35,
    "hp": 35,
    "ability": "Chlorophyll"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/skiploom.png",
    "name": "Skiploom",
    "element": "Grass",
    "description": "The bloom on top of its head opens and closes as the temperature fluctuates up and down.",
    "attack": 45,
    "hp": 55,
    "ability": "Leaf Guard"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/sunkern.png",
    "name": "Sunkern",
    "element": "Grass",
    "description": "It may drop out of the sky suddenly. If attacked by a SPEAROW, it will violently shake its leaves.",
    "attack": 30,
    "hp": 30,
    "ability": "Solar Power"
  },
  {
    "image": "https://img.pokemondb.net/sprites/home/normal/wooper.png",
    "name": "Wooper",
    "element": "Water",
    "description": "This POKéMON lives in cold water. It will leave the water to search for food when it gets cold outside.",
    "attack": 45,
    "hp": 55,
    "ability": "Damp"
  }
];
mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    return await Card.deleteMany({});
  })
  .then(() => {
    const cardsUpdated = cards.map(card => ({ ...card, user: '623c69a563cd82b7af200c4f' }));
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