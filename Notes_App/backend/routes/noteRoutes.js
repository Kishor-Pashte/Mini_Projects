const express = require("express");

const router = express.Router();
const Note = require("../models/Note");

//create route
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const note = await Note.create(req.body);
    res.status(201).json({ message: "Note created successfully", note });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//Get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//Delete Note
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(deletedNote, { message: "Note deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
