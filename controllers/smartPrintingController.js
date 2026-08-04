const smartPrintingRepository = require("../repositories/smartPrintingRepository");

// ======================================
// GET ALL LANGUAGES
// ======================================

const getAll = async (req, res) => {
  try {
    const content =
      await smartPrintingRepository.getAll();

    res.status(200).json({
      success: true,
      content,
    });
  } catch (error) {
    console.error(
      "Get Smart Printing content error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch Smart Printing content",
    });
  }
};


// ======================================
// GET BY LANGUAGE
// ======================================

const getByLanguage = async (req, res) => {
  try {
    const { language } = req.params;

    const content =
      await smartPrintingRepository.getByLanguage(
        language
      );

    if (!content) {
      return res.status(404).json({
        success: false,
        message:
          "Smart Printing content not found",
      });
    }

    res.status(200).json({
      success: true,
      content,
    });
  } catch (error) {
    console.error(
      "Get Smart Printing language error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch Smart Printing content",
    });
  }
};


// ======================================
// UPDATE BY LANGUAGE
// ======================================

const updateByLanguage = async (req, res) => {
  try {
    const { language } = req.params;

    const content =
      await smartPrintingRepository.updateByLanguage(
        language,
        req.body
      );

    res.status(200).json({
      success: true,
      message:
        "Smart Printing content updated successfully",
      content,
    });
  } catch (error) {
    console.error(
      "Update Smart Printing content error:",
      error
    );

    if (error.message === "Invalid language") {
      return res.status(400).json({
        success: false,
        message: "Invalid language",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Failed to update Smart Printing content",
    });
  }
};


// ======================================
// DELETE BY LANGUAGE
// ======================================

const deleteByLanguage = async (req, res) => {
  try {
    const { language } = req.params;

    const content =
      await smartPrintingRepository.deleteByLanguage(
        language
      );

    if (!content) {
      return res.status(404).json({
        success: false,
        message:
          "Smart Printing content not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Smart Printing content deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete Smart Printing content error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete Smart Printing content",
    });
  }
};


module.exports = {
  getAll,
  getByLanguage,
  updateByLanguage,
  deleteByLanguage,
};