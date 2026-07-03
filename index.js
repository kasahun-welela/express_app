const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
const users = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/users', (req, res) => {
  res.json(users);
});
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});