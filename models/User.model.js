const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
});

module.exports = model('User', userSchema);