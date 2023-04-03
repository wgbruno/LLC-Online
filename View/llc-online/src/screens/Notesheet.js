import React, { useState, useEffect } from 'react'; // hooks needed
import axios from 'axios';

export default function Notesheet()
{

  const [notes, setNotes] = useState([]);

  // get server request, updates data
  useEffect(() => {
    axios.get('/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.log(error));
  }, []);

  // table formatting
  return (
    <div>
      <h1>Notesheet</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Shift</th>
            <th>Tasks Completed</th>
            <th>Additional Info</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note._id}>
              <td>{note.date}</td>
              <td>{note.shift}</td>
              <td>{note.tasksCompleted}</td>
              <td>{note.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}