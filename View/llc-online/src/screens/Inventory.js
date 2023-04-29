/*const Inventory = ({data}) => {
   const fields = data.map(el => {
      return el.fields;
   })
return (
<table className="key">
<tbody className="fullWidth">
    {fields.map(el => {
         return <tr key={el.zone} className="key__row">
          <td className="key__cell">
             <div className="key__color"
                  style={{background:el.color}}>
             </div>
         </td>
         <td className="key__cell"
                style={{fontWeight:'bold'}}>
            {el.label}
         </td>
        <td className="key__cell">
             {el.description}
        </td>
        <td className="key__cell colorKey__layers">
            {el.shades && el.shades.map(el => {
                return <div className="colorKey__ex"
                            key={el}
                            style={{backgroundColor:el}}>
                       </div>
               })}
          </td>
    </tr>
   })}
</tbody>
</table>
);
}
export default Inventory;*/
/*
const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize Airtable client
    const base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo'}).base('app47HBb7xQ3Vk1uW');

    // Fetch inventory data from Airtable
    base('LLC Catalog')
      .select()
      .all()
      .then(records => {
        // Extract relevant data from records
        const inventoryItems = records.map(record => ({
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
        }));

        // Set inventory data to state
        setItems(inventoryItems);
      })
      .catch(error => {
        console.error('Error fetching inventory data from Airtable:', error);
      });
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {items.map(item => (
          <li key={item.Title}>
            <div>Name: {item.Title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;*/




/*
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo'}).base('app47HBb7xQ3Vk1uW');

base('LLC Catalog').select({
    // Selecting the first 3 records in Catalog Spreadsheet:
    maxRecords: 2000,
    view: "Catalog Spreadsheet"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});*/

import { useState, useEffect } from 'react';
import Airtable from 'airtable';
//import InventoryStyle from '../style/InventoryStyle.css'

const base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00'}).base('app47HBb7xQ3Vk1uW');

function Inventory() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base('LLC Catalog').select().all()
      .then(data => {
        setRecords(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const InventoryStyle = {
    justifyContent: 'center',
    alignItems: 'center'
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={InventoryStyle}>
      <h1>-</h1>
      <h1>LLC Inventory</h1>
      <table className="table">
        <thead className="thead">
          <tr className="trhead">
            <th>Title</th>
            <th>Language</th>
            <th>Copyright</th>
            <th>Country</th>
            <th>Description</th>
            <th>Length</th>
          </tr>
        </thead>
      <tbody className="tbody">
        {records.map(record => (
          <tr key={record.id} className="trbody">
            <td>{record.fields.Title}</td>
            <td>{record.fields.Language}</td>
            <td>{record.fields.Copyright}</td>
            <td>{record.fields.Country}</td>
            <td>{record.fields.Description}</td>
            <td>{record.fields.Length}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Inventory;