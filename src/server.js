const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 8080; // Choose a port number where your server will listen

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
