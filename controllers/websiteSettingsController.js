const websiteSettingsRepository = require("../repositories/websiteSettingsRepository");

// GET website settings
const getSettings = async (req, res) => {
  try {
    const settings = await websiteSettingsRepository.getSettings();

    res.status(200).json({
      success: true,
      settings,
    });
  } catch (error) {
    console.error("Get website settings error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch website settings",
    });
  }
};

// UPDATE website settings
const updateSettings = async (req, res) => {
  try {
    const settings = await websiteSettingsRepository.updateSettings(
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Website settings updated successfully",
      settings,
    });
  } catch (error) {
    console.error("Update website settings error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update website settings",
    });
  }
};

module.exports = {
  getSettings,
  updateSettings,
};