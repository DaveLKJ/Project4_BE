const express = require("express");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
require("./config/databasepg");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(PORT, function () {
  console.log(`Express app running on port ${PORT}`);
});
