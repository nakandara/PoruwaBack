import express from 'express';
import exampleRoutes from './routes/exampleRoutes.js';
import genderRoutes from './routes/genderRoutes.js'
import newsRoutes from './routes/newsRoutes.js'
import UserRoutes from './routes/userRoutes.js'
import {connectToDatabase} from './database/db.js'
import {connectToProjectDatabase} from './database/projectdb.js'
import session from 'express-session';
import { authenticateJWT } from './common/passport.js'
import cors from 'cors';

const app = express();
app.use('/uploads', express.static('uploads'));
const port = 8080;
app.use(cors());

app.use(
  session({
      secret:`${process.env.JWT_SECRET}`, 
      resave: false,
      saveUninitialized: false
  })
);

async function startServer() {
  try {
    // Connect to the database
    await connectToDatabase();
    await connectToProjectDatabase();

    // Start your server or perform other initialization tasks
    // ...
  } catch (err) {
    console.error('Error starting the server', err);
    process.exit(1); // Exit the application on error
  }
}

startServer();




app.use(express.json());


app.use('/api/auth', authenticateJWT);


app.use('/api', exampleRoutes);
app.use('/api', genderRoutes);
app.use('/api', newsRoutes)
app.use('/api', UserRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
