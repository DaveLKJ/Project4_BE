import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

import coffeeRouter from "./routes/coffeeRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();

const corsOptions = {
  origin: ["http://localhost:6001", "https://project4-fe.vercel.app"],
  credentials: true,
};
app.use(cors(corsOptions));

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/coffee", coffeeRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = 6001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
