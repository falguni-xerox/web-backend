const express = require("express");

const serviceRoutes = require("./serviceRoutes");
const websiteSettingsRoutes = require("./websiteSettingsRoutes");
const serviceCategoryRoutes = require("./serviceCategoryRoutes");
const smartPrintingRoutes = require("./smartPrinting");

const router = express.Router();

// =================================
// HEALTH CHECK
// =================================

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date(),
  });
});

// =================================
// TEST ROUTE
// =================================

router.get("/test-route", (req, res) => {
  res.status(200).json({
    success: true,
    message: "NEW ROUTES INDEX IS WORKING",
  });
});

// =================================
// SERVICES
// =================================

router.use("/services", serviceRoutes);

// =================================
// SERVICE CATEGORIES
// =================================

router.use(
  "/service-categories",
  serviceCategoryRoutes
);

// =================================
// WEBSITE SETTINGS
// =================================

router.use("/settings", websiteSettingsRoutes);

// =================================
// SMART PRINTING SYSTEM
// =================================

router.use(
  "/smart-printing",
  smartPrintingRoutes
);

module.exports = router;