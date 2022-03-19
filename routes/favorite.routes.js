
const router = require('express').Router();
const Card = require('../models/Card.model');
const Favorite = require('../models/Favorite.model')
const { isAuthenticated } = require('../middleware/jwt.middleware');
const { route } = require('./auth.routes');

router.get('/', isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;
  try {
    const favs = await Favorite.find({ user: userId }).populate('card');
    console.log(favs)
    res.json(favs)
  } catch (error) {
    console.log(error);
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
    res.json(favoriteCreated);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id/favorite', isAuthenticated, async (req, res, next) => {
  console.log("Ha llegado al backend");
  const { id } = req.params;
  const userId = req.payload._id;
  try {
    const favoriteDeleted = await Favorite.findOneAndDelete({ card: id, user: userId });
    res.json({ deleted: favoriteDeleted });
  } catch (error) {
    next(error);
  }
});

module.exports = router;