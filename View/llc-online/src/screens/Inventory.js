import { useState, useEffect } from 'react';
import Airtable from 'airtable';
//import InventoryStyle from '../style/InventoryStyle.css'

const base = new Airtable({apiKey: 'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00'}).base('app47HBb7xQ3Vk1uW');

function Inventory() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [Language, setLanguage] = useState('All');

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
/*
  const filteredRecords = records.filter(record => {
    if (searchTerm && !record.fields.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (Language && !record.fields.Language.toLowerCase().includes(Language.toLowerCase())) {
      return false;
    }
    return true;
  });*/

  const InventoryStyle = {
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={InventoryStyle}>
      <h1>-</h1>
      <h1 className="title">LLC Inventory</h1>
      {loading && <div>Loading...</div>}
      {!loading &&
        <div>
          <div>
            <label htmlFor="searchInput">Search by title:</label>
            <input id="searchInput" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div>
            <label htmlFor="languageSelect">Filter by language:</label>
            <select id="languageSelect" value={Language} onChange={e => setLanguage(e.target.value)}>
              <option value="">All languages</option>
              <option value="English">Arabic</option>
              <option value="Spanish">Chinese</option>
              <option value="French">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Spanish</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
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
      }
    </div>
  );
}

export default Inventory;