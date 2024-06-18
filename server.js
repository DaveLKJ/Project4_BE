import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import coffeeRouter from "./routes/coffeeRoute.js";
import userRouter from "./routes/userRoute.js";

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/coffee", coffeeRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
