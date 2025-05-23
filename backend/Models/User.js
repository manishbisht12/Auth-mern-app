const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  });

  const UserModel = mongoose.model('users', userSchema);
  module.exports = UserModel
  