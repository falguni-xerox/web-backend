const mongoose = require("mongoose");

const smartPrintingSystemSchema = new mongoose.Schema(
  {
    // ======================================
    // LANGUAGE
    // ======================================

    language: {
      type: String,
      enum: ["gu", "en", "hi"],
      required: true,
      unique: true,
    },

    // ======================================
    // BASIC INFORMATION
    // ======================================

    title: {
      type: String,
      default: "",
    },

    subtitle: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    // ======================================
    // FEATURES
    // ======================================

    features: [
      {
        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },
      },
    ],

    // ======================================
    // HOW IT WORKS
    // ======================================

    howItWorks: [
      {
        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },
      },
    ],

    // ======================================
    // BENEFITS
    // ======================================

    benefits: [
      {
        title: {
          type: String,
          default: "",
        },

        description: {
          type: String,
          default: "",
        },
      },
    ],

    // ======================================
    // DEMO VIDEO
    // ======================================

    demoVideoTitle: {
      type: String,
      default: "",
    },

    demoVideoDescription: {
      type: String,
      default: "",
    },

    demoVideoUrl: {
      type: String,
      default: "",
    },

    demoVideoActive: {
      type: Boolean,
      default: true,
    },

    // ======================================
    // PRICING
    // ======================================

    pricing: {
      title: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },

      price: {
        type: String,
        default: "",
      },
    },

    // ======================================
    // FAQ
    // ======================================

    faqs: [
      {
        question: {
          type: String,
          default: "",
        },

        answer: {
          type: String,
          default: "",
        },
      },
    ],

    // ======================================
    // CALL TO ACTION
    // ======================================

    ctaTitle: {
      type: String,
      default: "",
    },

    ctaDescription: {
      type: String,
      default: "",
    },

    ctaButtonText: {
      type: String,
      default: "",
    },

    ctaButtonLink: {
      type: String,
      default: "",
    },

    // ======================================
    // STATUS
    // ======================================

    active: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SmartPrintingSystem",
  smartPrintingSystemSchema
);