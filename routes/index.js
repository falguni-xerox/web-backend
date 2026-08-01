const express = require("express");

const serviceRoutes = require("./serviceRoutes");
const websiteSettingsRoutes = require("./websiteSettingsRoutes");
const serviceCategoryRoutes = require("./serviceCategoryRoutes");

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


module.exports = router;