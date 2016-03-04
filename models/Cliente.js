var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  email: String,
  endereco: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cliente', TodoSchema);
