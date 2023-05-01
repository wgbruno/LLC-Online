import getEvents from './getEvents';

jest.mock('googleapis', () => {
  return {
    google: {
      calendar: () => {
        return {
          events: {
            get: () => {
              return { data: { events: ['event1', 'event2'] } };
            },
          },
        };
      },
    },
  };
});

jest.mock('google-auth-library', () => {
  return {
    JWT: jest.fn().mockImplementation(() => {
      return {
        authorize: jest.fn(),
      };
    }),
  };
});

describe('getEvents', () => {
  it('should return a list of events', async () => {
    const events = await getEvents();
    expect(events).toEqual(['event1', 'event2']);
  });

  it('should throw an error if events cannot be retrieved', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const errorMessage = 'Could not get events: Test error message';
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const mockError = new Error('Test error message');
    const mockCalendarEventsGet = jest.fn().mockRejectedValue(mockError);
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const mockCalendar = {
      events: {
        get: mockCalendarEventsGet,
      },
    };
    const mockGoogle = {
      calendar: () => {
        return mockCalendar;
      },
    };
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});

    jest.mock('googleapis', () => {
      return {
        google: mockGoogle,
      };
    });

    await expect(getEvents()).rejects.toThrowError(errorMessage);

    jest.spyOn(console, 'error').mockRestore();
  });
});
