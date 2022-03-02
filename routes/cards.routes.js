const router = require('express').Router();
const Card = require('../models/Card.model');

router.get('/', async (req, res, next) => {
  console.log("Im here")
  try {
    const card = await Card.find();
    res.json({ card });
  } catch (error) {
    res.json(error);
  }
});

router.post('/cards', async (req, res, next) => {
  const { image, name, element, description, attack, hp, ability } = req.body;
  try {
    const card = await Card.create({ image, name, element, description, attack, HP: hp, ability });
    res.json({ created: card });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { image, name, element, description, attack, hp, ability } = req.body;
  try {
    const card = await Card.findByIdAndUpdate(id, { image, name, element, description, attack, hp, ability }, { new: true });
    res.json(card);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const card = await Card.findByIdAndRemove(id);
    res.json(card);
  } catch (error) {
    next(error);
  }
});


module.exports = router;