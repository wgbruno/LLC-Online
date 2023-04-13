const Note = require('../../models/notesheetDao');

// Controller functions
const notesheetController = {

  // Create a new note
  createNote: function(req, res, next) {
    const noteData = req.body;
    Note.create(noteData, function(err, note) {
      if (err) {
        return next(err);
      }
      res.json(note);
    });
  },

  // Read all notes
  readNotes: function(req, res, next) {
    Note.find({}, function(err, notes) {
      if (err) {
        return next(err);
      }
      res.json(notes);
    });
  },

  // Read a single note by ID
  readNoteById: function(req, res, next) {
    const id = req.params.id;
    Note.findById(id, function(err, note) {
      if (err) {
        return next(err);
      }
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    });
  },

  // Update a note by ID
  updateNoteById: function(req, res, next) {
    const id = req.params.id;
    const noteData = req.body;
    Note.findByIdAndUpdate(id, noteData, { new: true }, function(err, note) {
      if (err) {
        return next(err);
      }
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    });
  },

  // Delete a note by ID
  deleteNoteById: function(req, res, next) {
    const id = req.params.id;
    Note.findByIdAndDelete(id, function(err, note) {
      if (err) {
        return next(err);
      }
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    });
  }

};

module.exports = notesheetController;