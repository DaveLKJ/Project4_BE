require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { Pool } = require("./config/dbConfig");

// const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use("/api/users", userRoutes);

app.set("view engine", "ejs");

app.get("/users/register", (req, res) => {
  req.render("register");
});

app.get("/users/login", (req, res) => {
  req.render("login");
});

app.post("/users/register", (req, res) => {
  let { name, email, password, password2 } = req.body;

  console.log({
    name,
    email,
    password,
    password2,
  });
});

// Starting server
const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
  console.log(`Express app running on port ${PORT}`);
});
