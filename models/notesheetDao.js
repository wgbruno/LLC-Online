const mongoose = require('mongoose');
// names will remain as strings
const noteSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  reminder: {
    type: String,
    required: false
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;