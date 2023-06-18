const express = require('express');
const exampleRoutes = require('../src/routes/exampleRoutes');

const app = express();


app.get('/', (req, res) => {
  res.send('Hello, World new!');
});

app.use('/example', exampleRoutes);

const port = 8080; // Choose a port number where your server will listen

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
