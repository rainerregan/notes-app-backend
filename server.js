import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './mongodb/connect';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home page')
})

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(process.env.NODE_PORT, () => {
      console.log(`Server started at ${process.env.SERVER_URL}:${process.env.NODE_PORT}`)
    });
  } catch (error) {
    console.error(error);
  }
}

// Starting the server
startServer();