const mongoose = require("mongoose");

const websiteSettingsSchema = new mongoose.Schema(
  {
    // ================================
    // BASIC WEBSITE INFORMATION
    // ================================

    siteName: {
      type: String,
      default: "Falguni Xerox & Computer Work",
      trim: true,
    },

    tagline: {
      type: String,
      default: "Fast • Reliable • Affordable Printing Services",
      trim: true,
    },

    logo: {
      type: String,
      default: "",
      trim: true,
    },

    favicon: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // CONTACT INFORMATION
    // ================================

    phone: {
      type: String,
      default: "8320217733",
      trim: true,
    },

    whatsapp: {
      type: String,
      default: "8320217733",
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // SHOP TIMING
    // ================================

    morningOpening: {
      type: String,
      default: "7:30 AM",
      trim: true,
    },

    morningClosing: {
      type: String,
      default: "1:30 PM",
      trim: true,
    },

    eveningOpening: {
      type: String,
      default: "3:30 PM",
      trim: true,
    },

    eveningClosing: {
      type: String,
      default: "9:30 PM",
      trim: true,
    },

    closedMessage: {
      type: String,
      default: "We are closed from 1:30 PM to 3:30 PM.",
      trim: true,
    },

    // ================================
    // HERO SECTION
    // ================================

    heroTitle: {
      type: String,
      default: "Falguni Xerox & Computer Work",
      trim: true,
    },

    heroDescription: {
      type: String,
      default: "Fast, reliable and affordable printing services.",
      trim: true,
    },

    heroImage: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // CTA SECTION
    // ================================

    ctaTitle: {
      type: String,
      default: "Need Prints? We Are Here To Help!",
      trim: true,
    },

    ctaDescription: {
      type: String,
      default: "Upload your files or contact us on WhatsApp.",
      trim: true,
    },

    // ================================
    // BUTTONS / LINKS
    // ================================

    uploadUrl: {
      type: String,
      default: "",
      trim: true,
    },

    whatsappMessage: {
      type: String,
      default: "Hello Falguni Xerox, I want to print some documents.",
      trim: true,
    },

    // ================================
    // LOCATION / GOOGLE MAP
    // ================================

    googleMapUrl: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // SOCIAL LINKS
    // ================================

    instagramUrl: {
      type: String,
      default: "",
      trim: true,
    },

    facebookUrl: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // SEO
    // ================================

    seoTitle: {
      type: String,
      default: "Falguni Xerox & Computer Work",
      trim: true,
    },

    seoDescription: {
      type: String,
      default:
        "Falguni Xerox & Computer Work - Xerox, Printing, Lamination, Poster Design and Stationery Services.",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "WebsiteSettings",
  websiteSettingsSchema
);