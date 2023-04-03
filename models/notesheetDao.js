const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const notesheetSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  shift: {
    type: String,
    enum: ['Morning', 'Afternoon', 'Evening'],
    required: true
  },
  tasksCompleted: {
    type: [String],
    required: true
  },
  additionalInfo: {
    type: String
  }
});

const Note = mongoose.model('Note', notesheetSchema);

module.exports = {

  // Create a new note
  createNote: function(noteData, callback) {
    const newNote = new Note({
      date: noteData.date,
      shift: noteData.shift,
      tasksCompleted: noteData.tasksCompleted,
      additionalInfo: noteData.additionalInfo
    });

    newNote.save(callback);
  },

  // Read all notes
  readNotes: function(callback) {
    Note.find({}, callback);
  },

  // Read a single note by ID
  readNoteById: function(id, callback) {
    Note.findById(id, callback);
  },

  // Update a note by ID
  updateNoteById: function(id, noteData, callback) {
    Note.findByIdAndUpdate(id, noteData, callback);
  },

  // Delete a note by ID
  deleteNoteById: function(id, callback) {
    Note.findByIdAndDelete(id, callback);
  }
};