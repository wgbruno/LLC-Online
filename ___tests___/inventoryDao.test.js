const InventoryModel = require("../models/inventoryDao")
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

describe('Inventory Model', () => {
  it('returns all inventory records', async () => {
    const mockResponse = {
      records: [
        { id: 'rec123', fields: { title: 'Movie 1', year: '2021' } },
        { id: 'rec456', fields: { title: 'Movie 2', year: '2022' } },
        { id: 'rec789', fields: { title: 'Movie 3', year: '2023' } },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const inventory = await InventoryModel.getInventory();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.airtable.com/v0/app47HBb7xQ3Vk1uW/LLC%20Catalog',
      expect.objectContaining({
        headers: {
          Authorization: 'Bearer pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00',
        },
      })
    );
    expect(inventory).toEqual(mockResponse.records);
  }, 100000);

  it('returns an empty array if no inventory records are found', async () => {
    const mockResponse = { records: [] };
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const inventory = await InventoryModel.getInventory();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.airtable.com/v0/app47HBb7xQ3Vk1uW/LLC%20Catalog',
      expect.objectContaining({
        headers: {
          Authorization: 'Bearer pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00',
        },
      })
    );
    expect(inventory).toEqual([]);
  }, 100000);

  it('throws an error if the Airtable API request fails', async () => {
    const mockError = new Error('Network error');
    fetch.mockRejectOnce(mockError);

    await expect(InventoryModel.getInventory()).rejects.toThrowError(mockError);
  }, 100000);
});

describe('Inventory Controller', () => {
  it('returns all inventory records', async () => {
    const mockInventory = [
      { id: 'rec123', fields: { title: 'Movie 1', year: '2021' } },
      { id: 'rec456', fields: { title: 'Movie 2', year: '2022' } },
      { id: 'rec789', fields: { title: 'Movie 3', year: '2023' } },
    ];
    InventoryModel.getInventory = jest.fn().mockResolvedValue(mockInventory);
    const res = { send: jest.fn() };

    await InventoryController.getAllInventory({}, res);

    expect(InventoryModel.getInventory).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith(mockInventory);
  }, 100000);

  it('returns an empty array if no inventory records are found', async () => {
    InventoryModel.getInventory = jest.fn().mockResolvedValue([]);
    const res = { send: jest.fn() };

    await InventoryController.getAllInventory({}, res);

    expect(InventoryModel.getInventory);
  }, 100000);
})