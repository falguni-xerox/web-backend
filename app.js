const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// =================================
// CORS
// =================================

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",

  // Vercel Frontend
  "https://web-frontend-sigma-orcin.vercel.app",

  // Production domain
  "https://falgunixerox.in",
  "https://www.falgunixerox.in",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      // Example: Postman / server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);

      return callback(new Error("Not allowed by CORS"));
    },

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],

    credentials: true,

    optionsSuccessStatus: 204,
  })
);

// =================================
// BODY MIDDLEWARE
// =================================

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// =================================
// HOME ROUTE
// =================================

app.get("/", (req, res) => {
  console.log("✅ ROOT ROUTE HIT");

  res.status(200).json({
    success: true,
    message: "Falguni Xerox API Running",
  });
});

// =================================
// API HEALTH CHECK
// =================================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
  });
});

// =================================
// API ROUTES
// =================================

app.use("/api", routes);

// =================================
// 404 HANDLER
// =================================

app.use((req, res) => {
  console.log("❌ 404:", req.method, req.originalUrl);

  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// =================================
// ERROR HANDLER
// =================================

app.use((err, req, res, next) => {
  console.error("❌ API Error:", err);

  // CORS error
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// =================================
// EXPORT APP
// =================================

module.exports = app;