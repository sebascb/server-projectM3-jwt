const router = require('express').Router();
const Card = require('../models/Card.model');
const Favorite = require('../models/Favorite.model')
const { isAuthenticated } = require('../middleware/jwt.middleware');
const { route } = require('./auth.routes');

router.get('/', async (req, res, next) => {
  console.log("Im here")
  try {
    const card = await Card.find({});
    res.json({ card });
  } catch (error) {
    res.json(error);
  }
});

//domain/card/:id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const card = await Card.findById(id);
    if (card === null) {
      res.status(404).json({ error: 'Card Not Found' });
    } else {
      res.json(card);
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', isAuthenticated, async (req, res, next) => {
  const { image, name, element, description, attack, hp, ability } = req.body;
  try {
    const card = await Card.create({ image, name, element, description, attack, hp, ability });
    res.json({ created: card });
  } catch (error) {
    next(error);
  }
});


router.put('/:id/edit', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  const { image, name, element, description, attack, hp, ability } = req.body;
  try {
    const card = await Card.findByIdAndUpdate(id, { image, name, element, description, attack, hp, ability }, { new: true });
    res.json(card);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id/delete', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  try {
    const card = await Card.findByIdAndRemove(id);
    res.json(card);
  } catch (error) {
    next(error);
  }
});

router.get('/profile', isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;
  const { id } = req.params;
  try {
    const favs = await Favorite.find({ user: userId }).populate({card: id});
    console.log(favs);
    res.json({ created: favs })
  } catch (error) {
    next(error);
  }
});

router.post('/:id/favorite', isAuthenticated, async (req, res, next) => {
  console.log(req.payload);
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const favoriteCreate = await Favorite.create({
      user: userId,
      card: id,
    });
    res.json({ created: favoriteCreate });
  } catch (error) {
    next(error);
  }
});

router.get('/:id/favorite', isAuthenticated, async (req, res, next) => {
  console.log(req.payload);
  const { id } = req.params;
  const userId = req.payload._id;


  try {
    const favoriteCreated = await Favorite.find({
      user: userId,
      card: id,
    });
    res.json({ created: favoriteCreated });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id/favorite', isAuthenticated, async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const favoriteCreated = await Favorite.findByIdAndRemove({
      user: userId,
      card: id,
    });
    res.json({ deleted: favoriteCreated });
  } catch (error) {
    next(error);
  }
});

module.exports = router;