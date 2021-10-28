const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Date,
    default: Date.now,
  },
})

module.exports = model('Todo', schema)