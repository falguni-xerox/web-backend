const ServiceCategory = require("../models/ServiceCategory");

// =================================
// GET ALL CATEGORIES
// =================================

const getAllCategories = async () => {
return await ServiceCategory.find()
.sort({
displayOrder: 1,
createdAt: 1,
});
};

// =================================
// GET ACTIVE CATEGORIES
// =================================

const getActiveCategories = async () => {
return await ServiceCategory.find({
isActive: true,
}).sort({
displayOrder: 1,
createdAt: 1,
});
};

// =================================
// GET CATEGORY BY ID
// =================================

const getCategoryById = async (id) => {
return await ServiceCategory.findById(id);
};

// =================================
// GET CATEGORY BY SLUG
// =================================

const getCategoryBySlug = async (slug) => {
return await ServiceCategory.findOne({
slug: slug,
});
};

// =================================
// CREATE CATEGORY
// =================================

const createCategory = async (data) => {
return await ServiceCategory.create(data);
};

// =================================
// UPDATE CATEGORY
// =================================

const updateCategory = async (id, data) => {
return await ServiceCategory.findByIdAndUpdate(
id,
data,
{
new: true,
runValidators: true,
}
);
};

// =================================
// DELETE CATEGORY
// =================================

const deleteCategory = async (id) => {
return await ServiceCategory.findByIdAndDelete(id);
};

// =================================
// EXPORTS
// =================================

module.exports = {
getAllCategories,
getActiveCategories,
getCategoryById,
getCategoryBySlug,
createCategory,
updateCategory,
deleteCategory,
};
