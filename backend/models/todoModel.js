const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: Number,
  content: String,
  status: Boolean
})

const todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;