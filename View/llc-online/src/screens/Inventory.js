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

import React, { useEffect, useState } from 'react';
import Airtable from 'airtable';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Initialize Airtable client
    const base = new Airtable({ apiKey: 'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00' }).base('app47HBb7xQ3Vk1uW');

    // Fetch inventory data from Airtable
    base('Inventory')
      .select()
      .all()
      .then(records => {
        // Extract relevant data from records
        const inventoryItems = records.map(record => ({
          id: record.id,
          name: record.get('Name'),
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
          <li key={item.id}>
            <div>Name: {item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;