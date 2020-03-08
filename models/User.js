const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    defalut: Date.now
  }
});

module.exports = mongoose.model('user', UserScheme);
