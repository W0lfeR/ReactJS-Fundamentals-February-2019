const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let computerSchema = new mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Computer already exists.']},
  description: {type: mongoose.Schema.Types.String},
  price: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  image: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
})

let Computer = mongoose.model('Computer', computerSchema)

module.exports = Computer