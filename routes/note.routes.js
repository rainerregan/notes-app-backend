import express from 'express';
import { createNewNote, deleteNoteById, getAllUserNotes } from '../controllers/note.controller.js';

const router = express.Router();

// Get all user notes
router.route('/:userId').get(getAllUserNotes);

// Create Notes
router.route('/').post(createNewNote);

// Delete note by id
router.route('/').delete(deleteNoteById);

export default router;