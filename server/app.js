require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 5000;

// Configure CORS
const allowedOrigins = [
  "http://localhost:3000",
  "https://carrental.com",
  "http://127.0.0.1:5500" // localhost IP for local development
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin like mobile apps, Postman
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // Allow credentials such as cookies to be sent
  })
);

// Middleware
app.use(express.json());
app.use("/", router);
app.use("/", (req, res) => {
  res.send({ status: 200, message: "Welcome to Prime Cars!" });
});

app.listen(PORT, () => {
  console.log(`Server started at Port No: ${PORT}`);
});
