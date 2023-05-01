// includes create and update mocks

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
  } = require('./accountController');
  
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
})