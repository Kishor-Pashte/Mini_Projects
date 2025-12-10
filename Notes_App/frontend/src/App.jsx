import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API_URL = "http://localhost:4000/api/notes";

  //fetch notes
  const getNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    getNotes();
  };

  const addNote = async () => {
    if (!title) {
      return alert("Title is required");
    }

    await axios.post(API_URL, { title, content });

    setTitle("");
    setContent("");
    getNotes();

    alert("Note added");
  };
  return (
    <div style={{ width: "500px", margin: "auto", paddingTop: "40px" }}>
      <h2 style={{ fontSize: "40px", letterSpacing: "1.6px" }}>Notes App</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", padding: "10px" }}
        />

        <button
          onClick={addNote}
          style={{
            marginTop: "10px",
            padding: "10px 20px ",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          Add Note
        </button>
      </div>

      <hr />

      <h3>Your Notes</h3>

      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            padding: "15px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>{note.title}</h3>
          <p style={{ fontStyle: "italic" }}>{note.content}</p>

          <button
            onClick={() => deleteNote(note._id)}
            style={{
              color: "white",
              background: "#f55050ff",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
