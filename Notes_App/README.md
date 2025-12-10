📘 Full-Stack Notes App

A simple and clean Full Stack Notes Application where users can:

✔ Add notes (title + content)
✔ View all notes
✔ Delete notes
✔ Data is stored in MongoDB
✔ Backend built with Node.js + Express
✔ Frontend built with React.js

🚀 Tech Stack
Frontend

React.js

Axios

CSS (inline styling / your own styles)

Backend

Node.js

Express.js

MongoDB (Mongoose ORM)

🧩 Features
📝 Add Notes

Users can enter:

Title

Content

and click the Add Note button to store the note in MongoDB.

📄 Display Notes

All saved notes are displayed in a clean list format.

🗑 Delete Notes

Each note has a Delete button that removes the note from the database instantly.

🔄 Auto Update

Frontend automatically fetches notes after adding or deleting.

📂 Project Structure
/backend
   ├── server.js
   ├── routes/notes.js
   ├── models/Note.js

/frontend
   ├── src
   │    ├── App.js
   │    ├── components
   │    └── styles
   ├── package.json
