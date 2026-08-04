const SmartPrintingSystem = require("../models/SmartPrintingSystem");

// GET all language content
const getAll = async () => {
  return await SmartPrintingSystem.find({
    active: true,
  }).sort({
    language: 1,
  });
};

// GET single language content
const getByLanguage = async (language) => {
  return await SmartPrintingSystem.findOne({
    language,
  });
};

// CREATE or UPDATE language content
const updateByLanguage = async (language, data) => {
  const allowedLanguages = ["gu", "en", "hi"];

  if (!allowedLanguages.includes(language)) {
    throw new Error("Invalid language");
  }

  const content = await SmartPrintingSystem.findOneAndUpdate(
    { language },
    {
      $set: {
        ...data,
        language,
      },
    },
    {
      new: true,
      upsert: true,
      runValidators: true,
    }
  );

  return content;
};

// DELETE language content
const deleteByLanguage = async (language) => {
  return await SmartPrintingSystem.findOneAndDelete({
    language,
  });
};

module.exports = {
  getAll,
  getByLanguage,
  updateByLanguage,
  deleteByLanguage,
};