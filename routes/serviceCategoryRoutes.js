const express = require("express");

const {
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/serviceCategoryController");

const router = express.Router();

// =================================
// GET ALL CATEGORIES
// =================================

router.get("/", getAllCategories);


// =================================
// GET ACTIVE CATEGORIES
// =================================

router.get("/active", getActiveCategories);


// =================================
// GET CATEGORY BY ID
// =================================

router.get("/:id", getCategoryById);


// =================================
// CREATE CATEGORY
// =================================

router.post("/", createCategory);


// =================================
// UPDATE CATEGORY
// =================================

router.put("/:id", updateCategory);


// =================================
// DELETE CATEGORY
// =================================

router.delete("/:id", deleteCategory);


module.exports = router;