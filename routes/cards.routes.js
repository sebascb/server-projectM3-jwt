const router = require('express').Router();
const Card = require('../models/Card.model');

router.get('/', (req, res, next) => {
  console.log("Im here")
  Card.find({}).then(response => res.status(200).json(response)).catch(err => console.log(err))
  // res.json('All good in here');
});

router.post('/cards', (req, res, next) => {
    const { image, name, element, description, attack, hp, ability } = req.body;

    Card.create({ image, name, element, description, attack, HP: hp, ability })
        .then(response => {
          console.log(response);
          res.status(201).json({response: response.data})
        })
        .catch(error => res.json(error));
});

router.put('/cards/:id', (req, res, next) => {
    const { id } = req.params;

    Card.findByIdAndUpdate(id, req.body, { new: true } )
        .then((updatedCard) => res.json(updatedCard))
        .catch(error => res.json(error));
});

router.delete('/cards/:id', (req, res, next) => {
  const { id } = req.params;

  Card.findByIdAndRemove( id )
    .then(() => res.json({ message: `Card with ${ id } is removed successfully.` }))
    .catch(error => res.json(error));
});


module.exports = router;