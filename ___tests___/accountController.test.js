jest.mock('../models/accountDao', () => ({
  create: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
  findOne: jest.fn(),
  find: jest.fn()
}));

const Account = require('../models/accountDao');
const {
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  login,
  getAdmins,
  getStaff,
  getFaculty,
  getStudents
} = require('../controller/logic/accountController');

describe('accountController', () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('createAccount', () => {
    it('should create a new account and return a 201 status code', async () => {
      const mockCreatedAccount = {
        _id: 'testId',
        name: 'Test Account',
        email: 'test@test.com',
        password: 'testpassword',
        account_type: 'Student'
      };
      Account.create.mockResolvedValue(mockCreatedAccount);

      mockReq.body = mockCreatedAccount;
      await createAccount(mockReq, mockRes, mockNext);

      expect(Account.create).toHaveBeenCalledWith(mockCreatedAccount);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedAccount);
    });

    it('should call next with an error if there is an error creating the account', async () => {
      const mockError = new Error('Create account error');
      Account.create.mockRejectedValue(mockError);

      mockReq.body = {};
      await createAccount(mockReq, mockRes, mockNext);

      expect(Account.create).toHaveBeenCalledWith({});
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('getAccount', () => {
    it('should find and return an account with a given ID', async () => {
      const mockAccountId = 'testId';
      const mockFoundAccount = {
        _id: mockAccountId,
        name: 'Test Account',
        email: 'test@test.com',
        password: 'testpassword',
        account_type: 'Student'
      };
      Account.findById.mockResolvedValue(mockFoundAccount);

      mockReq.params = { id: mockAccountId };
      await getAccount(mockReq, mockRes, mockNext);

      expect(Account.findById).toHaveBeenCalledWith(mockAccountId);
      expect(mockRes.json).toHaveBeenCalledWith(mockFoundAccount);
    });

    it('should call next with an error if there is no account with the given ID', async () => {
      const mockAccountId = 'testId';
      Account.findById.mockResolvedValue(null);

      mockReq.params = { id: mockAccountId };
      await getAccount(mockReq, mockRes, mockNext);

      expect(Account.findById).toHaveBeenCalledWith(mockAccountId);
      expect(mockNext).toHaveBeenCalled();
    });

    it('should call next with an error if there is an error finding the account', async () => {
      const mockError = new Error('Find account error');
      Account.findById.mockRejectedValue(mockError);

      mockReq.params = { id: 'testId' };
      await getAccount(mockReq, mockRes, mockNext);

      expect(Account.findById).toHaveBeenCalledWith('testId');
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('updateAccount', () => {
    it('should find and update an account with a given ID', async () => {
      const mockAccountId = 'testId';
      const mockUpdate = {
        name: 'Updated Account',
        email: 'updated@test.com',
        password: 'updatedpassword',
        account_type: 'Faculty'
      };
      const mockUpdatedAccount = {
        _id: mockAccountId,
        ...mockUpdate
      };
      Account.findByIdAndUpdate.mockResolvedValue(mockUpdatedAccount);
  
      mockReq.params = { id: mockAccountId };
      mockReq.body = mockUpdate;
      await updateAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndUpdate).toHaveBeenCalledWith(
        mockAccountId,
        mockUpdate,
        { new: true }
      );
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedAccount);
    });
  
    it('should call next with an error if there is no account with the given ID', async () => {
      const mockAccountId = 'testId';
      Account.findByIdAndUpdate.mockResolvedValue(null);
  
      mockReq.params = { id: mockAccountId };
      await updateAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndUpdate).toHaveBeenCalledWith(
        mockAccountId,
        {},
        { new: true }
      );
      expect(mockNext).toHaveBeenCalled();
    });
  
    it('should call next with an error if there is an error finding/updating the account', async () => {
      const mockError = new Error('Update account error');
      Account.findByIdAndUpdate.mockRejectedValue(mockError);
  
      mockReq.params = { id: 'testId' };
      mockReq.body = { name: 'Updated Account' };
      await updateAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndUpdate).toHaveBeenCalledWith(
        'testId',
        { name: 'Updated Account' },
        { new: true }
      );
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });

  describe('deleteAccount', () => {
    it('should find and delete an account with a given ID', async () => {
      const mockAccountId = 'testId';
      const mockDeletedAccount = {
        _id: mockAccountId,
        name: 'Test Account',
        email: 'test@test.com',
        password: 'testpassword',
        account_type: 'Student'
      };
      Account.findByIdAndDelete.mockResolvedValue(mockDeletedAccount);
  
      mockReq.params = { id: mockAccountId };
      await deleteAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndDelete).toHaveBeenCalledWith(mockAccountId);
      expect(mockRes.json).toHaveBeenCalledWith(mockDeletedAccount);
    });
  
    it('should call next with an error if there is no account with the given ID', async () => {
      const mockAccountId = 'testId';
      Account.findByIdAndDelete.mockResolvedValue(null);
  
      mockReq.params = { id: mockAccountId };
      await deleteAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndDelete).toHaveBeenCalledWith(mockAccountId);
      expect(mockNext).toHaveBeenCalled();
    });
  
    it('should call next with an error if there is an error deleting the account', async () => {
      const mockError = new Error('Delete account error');
      Account.findByIdAndDelete.mockRejectedValue(mockError);
  
      mockReq.params = { id: 'testId' };
      await deleteAccount(mockReq, mockRes, mockNext);
  
      expect(Account.findByIdAndDelete).toHaveBeenCalledWith('testId');
      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });  
});