const express = require('express');
const app = express();

// Initialize empty array to hold shift objects
let shifts = [];

// Define API route to retrieve shifts data
app.get('/api/shifts', (req, res) => {
  res.json(shifts);
});

// Define API route to add a shift
app.post('/api/shifts', express.json(), (req, res) => {
  const { name, start, end } = req.body;
  shifts.push({ name, start, end });
  res.sendStatus(201);
});

// Define API route to update a shift
app.put('/api/shifts/:id', express.json(), (req, res) => {
  const id = parseInt(req.params.id);
  const { name, start, end } = req.body;
  const index = shifts.findIndex((shift) => shift.id === id);
  if (index !== -1) {
    shifts[index] = { id, name, start, end };
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Define API route to delete a shift
app.delete('/api/shifts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = shifts.findIndex((shift) => shift.id === id);
  if (index !== -1) {
    shifts.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});