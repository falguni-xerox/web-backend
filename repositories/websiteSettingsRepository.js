const WebsiteSettings = require("../models/WebsiteSettings");

const getSettings = async () => {
  let settings = await WebsiteSettings.findOne();

  if (!settings) {
    settings = await WebsiteSettings.create({});
  }

  return settings;
};

const updateSettings = async (data) => {
  let settings = await WebsiteSettings.findOne();

  if (!settings) {
    settings = await WebsiteSettings.create(data);
    return settings;
  }

  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) {
      settings[key] = data[key];
    }
  });

  await settings.save();

  return settings;
};

module.exports = {
  getSettings,
  updateSettings,
};