var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00'}).base('app47HBb7xQ3Vk1uW');

export default async function getData() {
    inventory = []
    const records = await base('LLC Catalog').select().all();
  
    records.forEach(function(record) {
        inventory.push(record)
    });
  
    return inventory;
  }
  
getData()
    .then((res)=> console.log("DONE: ", res))
    .catch((err)=>{console.log("ERR: ", err)});

/*
function getBase() {
    let catalog = base('LLC Catalog').select({view: "Catalog Spreadsheet"})
    return catalog
}

function getRecords() {
    inventory = []
    let cat = getBase()
    cat.firstPage(async function(err, records) {
        if (err) { console.error(err); return; }
        records.forEach(async function(record) {
            await inventory.push(record)
            console.log('Retrieved', record.get('Title'));
        });
    });
    return inventory
}

stuff = getRecords()
console.log(stuff)
*/

/*
export default async function getInventory() {
        var inventory = [];
        await base('LLC Catalog').select({
            // Selecting the first 100 records in Catalog Spreadsheet:
            maxRecords: 2000,
            view: "Catalog Spreadsheet"
        }).eachPage(async function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            await records.forEach(function(record) {
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
        return inventory;
}*/