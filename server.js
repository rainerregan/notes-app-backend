import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import bodyParser from 'body-parser';
import noteRouter from './routes/note.routes.js'

// Config Dotenv
dotenv.config();

// Express App
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({ message: "OK" });
});

// Using Router for Note Routes
app.use('/api/v1/notes', noteRouter);

// Server Starter
const startServer = () => {
  try {

    // Connect to MongoDB Database
    connectDB(process.env.MONGODB_URL);
    
    // Listen to requests
    app.listen(process.env.NODE_PORT, () => {
      console.log(`Server started at ${process.env.SERVER_URL}:${process.env.NODE_PORT}`)
    });
  } catch (error) {
    console.error(error);
  }
}

// Starting the server
startServer();