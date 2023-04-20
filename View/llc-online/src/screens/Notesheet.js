import React, { useState } from 'react';

function Notesheet() {
  const [notes, setNotes, setFirstName, setLastName] = useState([
    { id: 1, time: '9:00 - 10:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 2, time: '10:00 - 11:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 3, time: '11:00 - 12:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 4, time: '12:00 - 1:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 5, time: '1:00 - 2:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 6, time: '2:00 - 3:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 7, time: '3:00 - 4:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 8, time: '4:00 - 5:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 9, time: '5:00 - 6:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 10, time: '6:00 - 7:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 11, time: '7:00 - 8:00', firstName: '', lastName: '', note: '', reminder: '' },
    { id: 12, time: '8:00 - 9:00', firstName: '', lastName: '', note: '', reminder: '' },
  ]);

  const handleNoteChange = (id, note) => {
    setNotes(notes.map(n => (n.id === id ? { ...n, note } : n)));
  };

  const handleFirstNameChange = (id, firstName) => {
    setFirstName(notes.map(n => (n.id === id ? { ...n, firstName } : n)));
  };

  const handleLastNameChange = (id, lastName) => {
    setLastName(notes.map(n => (n.id === id ? { ...n, lastName } : n)));
  };

  const notesheetPageStyles = {
    backgroundColor: '#209765', // Dark green background color
    height: '100vh', // Set height of the container to full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    color: '#FFF',
    borderRadius: '20px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    padding: '40px',
    margin: '20px'
  }

  const tableStyles = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px'
  }

  const thStyles = {
    backgroundColor: '#006400',
    color: '#FFF',
    padding: '10px',
    textAlign: 'left'
  }

  return (
    <div style={notesheetPageStyles}>
      <h1>Notesheet</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Note</th>
            <th>Reminder</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.time}</td>
              <td>
                <input type="text" value={note.firstName} onChange={e => handleFirstNameChange(note.id, e.target.value)} />
              </td>
              <td>
                <input type="text" value={note.lastName} onChange={e => handleLastNameChange(note.id, e.target.value)} />
              </td>
              <td>
                <input type="text" value={note.note} onChange={e => handleNoteChange(note.id, e.target.value)} />
              </td>
              <td>{note.reminder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Notesheet;