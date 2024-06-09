const bcrypt = require("bcrypt");
const { pool } = require("../config/dbConfig");

const registerUser = async (req, res) => {
  const { email, password, password2 } = req.body;

  // Check if all required fields are provided
  if (!email || !password || !password2) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Check if passwords match
  if (password !== password2) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    // Save user data to the database
    const query = "INSERT INTO users (email, password) VALUES ($1, $2)";
    await pool.query(query, [email, hashedPassword]);

    // Respond with success message
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
};
