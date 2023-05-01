import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import credentials from '../../models/llc-calendar-379603-6b73e6c7fc25.json';

const getEvents = async () => {
    // create client that we can use to communicate with Google 
    const client = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [ // set the right scope
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
    });

    const calendar = google.calendar({ version: 'v3' });

    // We make a request to Google Calendar API.

    try {
        const res = calendar.events.get({
            calendarId: 'klbqroltufja6ml871e71p1an0@group.calendar.google.com',
            auth: client
          });
          return res.data.events;
    }
    catch(error) {
        throw new Error(`Could not get events: ${(error.message)}`);
    }
}

export default getEvents