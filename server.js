require('dotenv').config();

const { google } = require('googleapis');
const db_conn = require('./models/index');

db_conn.connect();

const ExpressApp = require('./App');
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
//const GOOGLE_PRIVATE_KEY="<private-key>"
//const GOOGLE_CLIENT_EMAIL = "<client-email>"
const GOOGLE_PROJECT_NUMBER = "<614210105304>"
const GOOGLE_CALENDAR_ID = "<klbqroltufja6ml871e71p1an0@group.calendar.google.com>"

app.get('/', (req, res) => {
    const jwtClient = new google.auth.JWT(
      null,
      null,
      null,
      SCOPES
    );
  
    const calendar = google.calendar({
      version: 'v3',
      project: GOOGLE_PROJECT_NUMBER,
      auth: null
    });
  
    calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    }, (error, result) => {
      if (error) {
        res.send(JSON.stringify({ error: error }));
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: 'No upcoming events found.' }));
        }
      }
    });
  });

ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){ 
    console.log(`Server Running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});



