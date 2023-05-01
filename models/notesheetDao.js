const mongoose = require('mongoose');
const moment = require('moment');

const notesheetSchema = new mongoose.Schema({
  time: {
    type: Date,
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
    type: Date,
    required: false
  }
});

// Add a virtual property that will return the time of the reminder
notesheetSchema.virtual('reminderTime').get(function() {
  return moment(this.time).subtract(1, 'hour').toDate();
});

// Add an instance method to set the reminder
notesheetSchema.methods.setReminder = function() {
  this.reminder = this.reminderTime;
};

// Add a static method to get all notes with a reminder before a given date
notesheetSchema.statics.getNotesWithReminderBefore = function(date) {
  return this.find({ reminder: { $lte: date } });
};

const Note = mongoose.model('Note', notesheetSchema);

module.exports = Note;