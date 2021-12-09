const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const GuestList = mongoose.model('guestList', guestSchema);

module.exports = GuestList;
