const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Falguni Xerox API Running"
  });
});

// API Routes
app.use("/api", routes);

module.exports = app;