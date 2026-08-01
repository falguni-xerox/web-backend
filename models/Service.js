const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    // ================================
    // SERVICE BASIC INFORMATION
    // ================================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // SERVICE CATEGORY
    // ================================

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceCategory",
      required: true,
    },

    // ================================
    // SERVICE ICON
    // ================================

    icon: {
      type: String,
      default: "fa-copy",
      trim: true,
    },

    // ================================
    // SERVICE IMAGE
    // ================================

    image: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // PRICE
    // ================================

    price: {
      type: String,
      default: "",
      trim: true,
    },

    // ================================
    // STATUS
    // ================================

    status: {
      type: Boolean,
      default: true,
    },

    // ================================
    // DISPLAY ORDER
    // ================================

    displayOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);