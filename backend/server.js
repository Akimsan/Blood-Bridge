  // backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// Import routes
const authRoutes = require("./routes/authRoutes");
const donorRoutes = require("./routes/donorRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/auth", donorRoutes);


app.use(bodyParser.json());

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});