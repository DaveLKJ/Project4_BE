const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
require("./config/database");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
