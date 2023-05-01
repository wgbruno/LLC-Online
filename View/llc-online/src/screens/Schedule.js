import React, { useState, useEffect } from 'react';

function Schedule() {
  const [shifts, setShifts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);
  const [name, setName] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // Retrieve shifts data from backend API when component mounts
  useEffect(() => {
    fetch('/api/shifts')
      .then(response => response.json())
      .then(data => setShifts(data));
  }, []);

  // Add a new shift to the backend when form is submitted
  const handleCreateShift = (e) => {
    e.preventDefault();
    fetch('/api/shifts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, start, end }),
    })
      .then(() => {
        setShifts([...shifts, { name, start, end }]);
        setName('');
        setStart('');
        setEnd('');
        setShowModal(false);
      });
  };

  // Update the selected shift in the backend when form is submitted
  const handleUpdateShift = (e) => {
    e.preventDefault();
    fetch(`/api/shifts/${selectedShift.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, start, end }),
    })
      .then(() => {
        const updatedShifts = [...shifts];
        const index = updatedShifts.findIndex((shift) => shift.id === selectedShift.id);
        updatedShifts[index] = { ...selectedShift, name, start, end };
        setShifts(updatedShifts);
        setName('');
        setStart('');
        setEnd('');
        setSelectedShift();
        setShowModal(false);
    });
};

// Delete the selected shift from the backend
const handleDeleteShift = () => {
  fetch(`/api/shifts/${selectedShift.id}`, {
    method: 'DELETE',
  })
    .then(() => {
      const updatedShifts = shifts.filter((shift) => shift.id !== selectedShift.id);
      setShifts(updatedShifts);
      setSelectedShift(null);
    });
};

// Show modal dialog to create or update a shift
const handleShowModal = (shift) => {
  if (shift) {
    setSelectedShift(shift);
    setName(shift.name);
    setStart(shift.start);
    setEnd(shift.end);
  } else {
    setSelectedShift(null);
    setName('');
    setStart('');
    setEnd('');
  }
  setShowModal(true);
};

return (
  <div className="schedule">
    {shifts.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>9am</th>
            <th>10am</th>
            <th>11am</th>
            <th>12pm</th>
            <th>1pm</th>
            <th>2pm</th>
            <th>3pm</th>
            <th>4pm</th>
            <th>5pm</th>
            <th>6pm</th>
            <th>7pm</th>
            <th>8pm</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift.id}>
              <th>{shift.name}</th>
              <td
                className={shift.start === '9am' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '9am' && shift.end === '10am' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '10am' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '10am' && shift.end === '11am' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '11am' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '11am' && shift.end === '12pm' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '12pm' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '12pm' && shift.end === '1pm' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '1pm' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '1pm' && shift.end === '2pm' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '2pm' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '2pm' && shift.end === '3pm' ? shift.name : ''}
              </td>
              <td
                className={shift.start === '3pm' ? 'selected' : ''}
                onClick={() => handleShowModal(shift)}
              >
                {shift.start === '3pm' && shift.end === '4pm' ? shift.name : ''}
              </td>
              <td
                  className={shift.start === '4pm' ? 'selected' : ''}
                  onClick={() => handleShowModal(shift)}
                >
                  {shift.start === '4pm' && shift.end === '5pm' ? shift.name : ''}
                </td>
                <td
                  className={shift.start === '5pm' ? 'selected' : ''}
                  onClick={() => handleShowModal(shift)}
                >
                  {shift.start === '5pm' && shift.end === '6pm' ? shift.name : ''}
                </td>
                <td
                  className={shift.start === '6pm' ? 'selected' : ''}
                  onClick={() => handleShowModal(shift)}
                >
                  {shift.start === '6pm' && shift.end === '7pm' ? shift.name : ''}
                </td>
                <td
                  className={shift.start === '7pm' ? 'selected' : ''}
                  onClick={() => handleShowModal(shift)}
                >
                  {shift.start === '7pm' && shift.end === '8pm' ? shift.name : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No shifts available.</p>
      )}

      {showModal && (
        <div className="modal">
          <form onSubmit={handleUpdateShift}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Start:
              <select value={start} onChange={(e) => setStart(e.target.value)} required>
                <option value=""></option>
                <option value="9am">9am</option>
                <option value="10am">10am</option>
                <option value="11am">11am</option>
                <option value="12pm">12pm</option>
                <option value="1pm">1pm</option>
                <option value="2pm">2pm</option>
                <option value="3pm">3pm</option>
                <option value="4pm">4pm</option>
                <option value="5pm">5pm</option>
                <option value="6pm">6pm</option>
                <option value="7pm">7pm</option>
                <option value="8pm">8pm</option>
              </select>
            </label>
            <label>
              End:
              <select value={end} onChange={(e) => setEnd(e.target.value)} required>
                <option value=""></option>
                <option value="10am">10am</option>
                <option value="11am">11am</option>
                <option value="12pm">12pm</option>
                <option value="1pm">1pm</option>
                <option value="2pm">2pm</option>
                <option value="3pm">3pm</option>
                <option value="4pm">4pm</option>
                <option value="5pm">5pm</option>
                <option value="6pm">6pm</option>
                <option value="7pm">7pm</option>
                <option value="8pm">8pm</option>
              </select>
            </label>
            <button type="submit">{selectedShift ? 'Update Shift' : 'Create Shift'}</button>
          </form>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}

      {selectedShift (
            <div className="shift-details">
            <h2>{selectedShift.name}</h2>
            <p>
                Start Time: <strong>{selectedShift.start}</strong>
            </p>
            <p>
                End Time: <strong>{selectedShift.end}</strong>
            </p>
            <button onClick={() => handleDeleteShift(selectedShift)}>Delete</button>
            <button onClick={() => setShowModal(true)}>Edit</button>
            </div>
        )}
        </div>
    );
    };
      
export default Schedule;
      