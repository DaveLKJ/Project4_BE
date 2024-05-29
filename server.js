const express = require("express");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

require("dotenv").config();
require("./config/databasepg");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
