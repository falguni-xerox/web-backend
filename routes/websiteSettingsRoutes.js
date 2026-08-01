const express = require("express");

const {
  getSettings,
  updateSettings,
} = require("../controllers/websiteSettingsController");

const router = express.Router();

// Get website settings
router.get("/", getSettings);

// Update website settings
router.put("/", updateSettings);

module.exports = router;