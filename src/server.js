import express from 'express';
import exampleRoutes from './routes/exampleRoutes.js';
import {connectToDatabase} from './database/db.js'


const app = express();
const port = 8080;



async function startServer() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Start your server or perform other initialization tasks
    // ...
  } catch (err) {
    console.error('Error starting the server', err);
    process.exit(1); // Exit the application on error
  }
}

startServer();

app.use(express.json());
app.use('/example', exampleRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
