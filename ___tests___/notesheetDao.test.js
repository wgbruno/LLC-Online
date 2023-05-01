const mongoose = require('mongoose');
const Note = require('../models/notesheetDao');

describe('Note Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/test-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should save a new note to the database', async () => {
    const newNote = new Note({
      time: '2pm',
      firstName: 'John',
      lastName: 'Doe',
      note: 'This is a test note',
    });
    await newNote.save();
    const savedNote = await Note.findOne({ firstName: 'John' });
    expect(savedNote.note).toBe('This is a test note');
  });

  it('should require firstName, lastName, note, and time', async () => {
    const invalidNote = new Note({});
    let validationError;
    try {
      await invalidNote.save();
    } catch (error) {
      validationError = error;
    }
    expect(validationError.errors.time.kind).toBe('required');
    expect(validationError.errors.firstName.kind).toBe('required');
    expect(validationError.errors.lastName.kind).toBe('required');
    expect(validationError.errors.note.kind).toBe('required');
  });
});