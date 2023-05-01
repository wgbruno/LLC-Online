const accountModel = require('../models/accountDao');
const database = require('../models/index');

beforeAll(async () => {
  await database.connect();
});

afterAll(async () => {
  await accountModel.delete();
  await database.disconnect();
});

beforeEach(async () => {
  await accountModel.delete();
});

test('creates and saves a new account successfully', async () => {
  const newAccount = {
    first_name: 'Joe',
    last_name: 'Momma',
    account_type: 'Student',
    email: 'joemomma@example.com',
    password: 'password123',
  };

  const createdAccount = await accountModel.create(newAccount);

  expect(createdAccount._id).toBeDefined();
  expect(createdAccount.first_name).toBe(newAccount.first_name);
  expect(createdAccount.last_name).toBe(newAccount.last_name);
  expect(createdAccount.account_type).toBe(newAccount.account_type);
  expect(createdAccount.email).toBe(newAccount.email);
  expect(createdAccount.password).toBe(newAccount.password);
});

test('finds an account by ID', async () => {
  const newAccount = {
    first_name: 'Joe',
    last_name: 'Momma',
    account_type: 'Student',
    email: 'joemomma@example.com',
    password: 'password123',
  };

  const createdAccount = await accountModel.create(newAccount);

  const foundAccount = await accountModel.searchAccounts(createdAccount._id);

  expect(foundAccount._id).toEqual(createdAccount._id);
  expect(foundAccount.first_name).toBe(createdAccount.first_name);
  expect(foundAccount.last_name).toBe(createdAccount.last_name);
  expect(foundAccount.account_type).toBe(createdAccount.account_type);
  expect(foundAccount.email).toBe(createdAccount.email);
  expect(foundAccount.password).toBe(createdAccount.password);
});

test('logs in an account', async () => {
  const newAccount = {
    first_name: 'Joe',
    last_name: 'Momma',
    account_type: 'Student',
    email: 'joemomma@example.com',
    password: 'password123',
  };

  await accountModel.create(newAccount);

  const loggedAccount = await accountModel.login(
    newAccount.email,
    newAccount.password,
  );

  expect(loggedAccount.email).toBe(newAccount.email);
  expect(loggedAccount.password).toBe(newAccount.password);
});

test('updates an account', async () => {
  const newAccount = {
    first_name: 'Joe',
    last_name: 'Momma',
    account_type: 'Student',
    email: 'joemomma@example.com',
    password: 'password123',
  };

  const createdAccount = await accountModel.create(newAccount);

  const updates = {
    first_name: 'Joseph',
    last_name: 'Mama',
  };

  const updatedAccount = await accountModel.update(
    createdAccount._id,
    updates,
  );

  expect(updatedAccount._id).toEqual(createdAccount._id);
  expect(updatedAccount.first_name).toBe(updates.first_name);
  expect(updatedAccount.last_name).toBe(updates.last_name);
  expect(updatedAccount.account_type).toBe(createdAccount.account_type);
  expect(updatedAccount.email).toBe(createdAccount.email);
  expect(updatedAccount.password).toBe(createdAccount.password);
});

test('deletes an account', async () => {
  const newAccount = {
    first_name: 'Joe',
    last_name: 'Momma',
    account_type: 'Student',
    email: 'joemomma@example.com',
    password: 'password123',
  };

  const createdAccount = await accountModel.create(newAccount);
  const deletedAccount = await accountModel.getAccount(createdAccount._id);
  expect(deletedAccount).toBeNull();
});