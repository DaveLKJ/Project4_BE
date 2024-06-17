import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
