import Note from '../mongodb/models/Note.js'

/**
 * Get Request Params:
 * - userId
 */
const getAllUserNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * Body Params:
 * - id
 * - userId
 * - title
 * - content
 */
const createNewNote = async (req, res) => {
  try {
    // Get the body data
    const { id, userId, title, content } = req.body;

    // Create new Note
    const newNote = await Note.create({
      id, userId, title, content
    });

    // Return status 201
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * Body Params:
 * id = Notes id
 */
const deleteNoteById = async (req, res) => {
  try {
    const { id } = req.body;
    await Note.deleteOne({ id: id });

    res.status(200).json({ message: `Notes ${id} deleted!` });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  getAllUserNotes,
  createNewNote,
  deleteNoteById
}