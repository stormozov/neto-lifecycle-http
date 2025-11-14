import cors from "cors";
import express from "express";
import multer from "multer";

const app = express();
const upload = multer(); 

// MIDDLEWARE
app.use(cors());

const notes = [];
let nextId = 1;

// ROUTES

/**
 * GET /notes
 */
app.get("/notes", (req, res) => {
  res.json(notes);
});

/**
 * POST /notes
 */
app.post("/notes", upload.none(), (req, res) => {
  const newNote = { ...req.body, id: nextId++ };
  notes.push(newNote);

  res.status(201).json(newNote);
});

/**
 * DELETE /notes
 */
app.delete("/notes", (req, res) => {
  if (notes.length === 0) {
    res.status(204).end();
  } else {
    notes.length = 0;
    nextId = 1;
    
    res.status(204).end();
  }
});

/**
 * DELETE /notes/:id
 */
app.delete("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const index = notes.findIndex((o) => o.id === noteId);
  if (index !== -1) notes.splice(index, 1);

  res.status(204).end();
});

// START SERVER
const port = process.env.PORT || 7070;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
