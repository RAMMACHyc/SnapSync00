const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please add a firstName'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a lastName'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)