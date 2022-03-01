const router = require('express').Router();
const Card = require('../models/Card.model');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

router.post('/cards', (req, res, next) => {
    const { image, name, element, description, attack, hp, ability } = req.body;

    Card.create({ image, name, element, description, attack, HP: hp, ability })
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

router.put('/cards/:id', (req, res, next) => {
    const { id } = req.params;

    Card.findByIdAndUpdate(id, req.body, { new: true } )
        .then((updatedCard) => res.json(updatedCard))
        .catch(error => res.json(error));
});

module.exports = router;
