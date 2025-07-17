// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
