const serviceCategoryRepository = require("../repositories/serviceCategoryRepository");

// =================================
// GET ALL CATEGORIES
// =================================

const getAllCategories = async (req, res) => {
  try {
    const categories =
      await serviceCategoryRepository.getAllCategories();

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    console.error(
      "Get service categories error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch service categories",
    });
  }
};


// =================================
// GET ACTIVE CATEGORIES
// =================================

const getActiveCategories = async (req, res) => {
  try {
    const categories =
      await serviceCategoryRepository.getActiveCategories();

    res.status(200).json({
      success: true,
      count: categories.length,
      categories,
    });
  } catch (error) {
    console.error(
      "Get active service categories error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch active service categories",
    });
  }
};


// =================================
// GET CATEGORY BY ID
// =================================

const getCategoryById = async (req, res) => {
  try {
    const category =
      await serviceCategoryRepository.getCategoryById(
        req.params.id
      );

    if (!category) {
      return res.status(404).json({
        success: false,
        message:
          "Service category not found",
      });
    }

    res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error(
      "Get service category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch service category",
    });
  }
};


// =================================
// CREATE CATEGORY
// =================================

const createCategory = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      icon,
      image,
      isActive,
      displayOrder,
    } = req.body;

    // Required fields
    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        message:
          "Category name and slug are required",
      });
    }

    // Check duplicate slug
    const existingCategory =
      await serviceCategoryRepository.getCategoryBySlug(
        slug
      );

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message:
          "A category with this slug already exists",
      });
    }

    const category =
      await serviceCategoryRepository.createCategory({
        name,
        slug,
        description,
        icon,
        image,
        isActive,
        displayOrder,
      });

    res.status(201).json({
      success: true,
      message:
        "Service category created successfully",
      category,
    });
  } catch (error) {
    console.error(
      "Create service category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create service category",
    });
  }
};


// =================================
// UPDATE CATEGORY
// =================================

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const {
      name,
      slug,
      description,
      icon,
      image,
      isActive,
      displayOrder,
    } = req.body;

    // Required fields
    if (!name || !slug) {
      return res.status(400).json({
        success: false,
        message:
          "Category name and slug are required",
      });
    }

    // Check duplicate slug
    const existingCategory =
      await serviceCategoryRepository.getCategoryBySlug(
        slug
      );

    if (
      existingCategory &&
      existingCategory._id.toString() !==
        categoryId
    ) {
      return res.status(409).json({
        success: false,
        message:
          "A category with this slug already exists",
      });
    }

    const category =
      await serviceCategoryRepository.updateCategory(
        categoryId,
        {
          name,
          slug,
          description,
          icon,
          image,
          isActive,
          displayOrder,
        }
      );

    if (!category) {
      return res.status(404).json({
        success: false,
        message:
          "Service category not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Service category updated successfully",
      category,
    });
  } catch (error) {
    console.error(
      "Update service category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update service category",
    });
  }
};


// =================================
// DELETE CATEGORY
// =================================

const deleteCategory = async (req, res) => {
  try {
    const category =
      await serviceCategoryRepository.deleteCategory(
        req.params.id
      );

    if (!category) {
      return res.status(404).json({
        success: false,
        message:
          "Service category not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Service category deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete service category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete service category",
    });
  }
};


module.exports = {
  getAllCategories,
  getActiveCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};