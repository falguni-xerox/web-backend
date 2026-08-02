const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// =================================
// CORS
// =================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://web-frontend-sigma-orcin.vercel.app",
    ],
    methods: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "OPTIONS",
    ],
    credentials: true,
  })
);

// =================================
// MIDDLEWARE
// =================================

app.use(express.json());

// =================================
// HOME ROUTE
// =================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Falguni Xerox API Running",
  });
});

// =================================
// API ROUTES
// =================================

app.use("/api", routes);

module.exports = app;