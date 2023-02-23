import mongoose from "mongoose";

// Create Schema
const noteSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});


// Define Model
const noteModel = mongoose.model("Note", noteSchema);

export default noteModel;