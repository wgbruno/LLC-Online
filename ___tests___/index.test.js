const database = require('../models/index')
const mongoose = require('mongoose');

describe('Database Connection', () => {
  beforeAll(() => {
    process.env.DB_URI;
    process.env.TESTDB_URI;
  });

  afterEach(async () => {
    await database.disconnect();
  });

  test('connects to production database', async () => {
    await database.connect();
    expect(mongoose.connection.readyState).toBe(1);
  });

  test('connects to test database', async () => {
    await database.connect('test');
    expect(mongoose.connection.readyState).toBe(1);
  });

  test('disconnects from database', async () => {
    await database.connect();
    await database.disconnect();
    expect(mongoose.connection.readyState).toBe(0);
  });
});