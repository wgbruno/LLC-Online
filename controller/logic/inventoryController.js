var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00'}).base('app47HBb7xQ3Vk1uW');
var inventory = [];

function getInventory() {
        base('LLC Catalog').select({
            // Selecting the first 100 records in Catalog Spreadsheet:
            maxRecords: 2000,
            view: "Catalog Spreadsheet"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function(record) {
                var selection = {
                    Title : record.get('Title'),
                    Alternate_title : record.get('Alternate Title'),
                    Call_number : record.get('Call Number'),
                    Language : record.get('Language'),
                    Author_director : record.get('Author/Director'),
                    Copyright : record.get('Copyright'),
                    Media_type : record.get('Media Type'),
                    Country : record.get('Country'),
                    Language_subtitles : record.get('Language of subtitles'),
                    Reserved : record.get('Reserved?'),
                    Checked : record.get('Checked out?'),
                    Description : record.get('Description'),
                    Length : record.get('Length')
                };
                inventory.push(selection);
            });
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        })
}

function returnInventory() {
    getInventory()
    setTimeout(() => { return inventory; }, 5000);
}

stuff = returnInventory()