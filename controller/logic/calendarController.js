//Project number - 614210105304
//Cultural Events Calendar ID - klbqroltufja6ml871e71p1an0@group.calendar.google.com

function OnLoadCallback() {
    var config = {
        client_id: '32j4lk32j5kj342l5h.googleuser.com', //fake client id
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
    };
    gapi.client.setApiKey('fId345AM20HXXXXXXXXXXXXXXXXgT3f9kyp2REfkaw2'); //fake api key
    gapi.client.load('calendar', 'v3', function() {
        var today = new Date(),
            request;

        request = gapi.client.calendar.calendarList.get({
            calendarId: 'pt_br.brazilian#holiday@group.v.calendar.google.com',
            timeMin: (new Date(today.getFullYear(), today.getMonth(), today.getDay(), 0, 0, 0, 0)).toISOString(),
            timeMax: (new Date(today.getFullYear(), today.getMonth(), today.getDay(), 23, 59, 59, 999)).toISOString(),
            fields: 'items(creator(displayName,email),end,endTimeUnspecified,start,summary)'
        });

        request.execute(function(response) {
            window.alert('length of items: ' + response.items.length);
        });

    });
}