const express = require("express");
const path = require("path");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// Routes
app.use("/api/users", userRoutes);

// Starting server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
