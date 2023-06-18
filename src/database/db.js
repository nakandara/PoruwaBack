import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://pramodporuwa:pramod1997@cluster0.wv31aky.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database;

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    database = client.db('test');
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas', err);
  }
}

export function getDatabase() {
  return database;
}
