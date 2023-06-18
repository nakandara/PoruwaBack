// server.js
const express = require('express');
const exampleRoutes = require('../src/routes/exampleRoutes');

const app = express();

// Other middleware and configurations

app.use('/example', exampleRoutes);

// Start the server
const port = 9090;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
