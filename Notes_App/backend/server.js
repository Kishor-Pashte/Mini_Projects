require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const routes = require("./routes/noteRoutes");

app.use(express.json());
app.use(cors());

//routes
app.use("/api/notes", routes);

//connect to db
const connectDB = require("./config/db");
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
