const Service = require("../models/Service");

// =================================
// GET ALL SERVICES
// =================================

const getAllServices = async () => {
  return await Service.find()
    .populate("category", "name slug")
    .sort({ displayOrder: 1, createdAt: 1 });
};


// =================================
// GET ACTIVE SERVICES
// =================================

const getActiveServices = async () => {
  return await Service.find({ status: true })
    .populate("category", "name slug")
    .sort({ displayOrder: 1, createdAt: 1 });
};


// =================================
// GET SERVICES BY CATEGORY
// =================================

const getServicesByCategory = async (categoryId) => {
  return await Service.find({
    category: categoryId,
  })
    .populate("category", "name slug")
    .sort({ displayOrder: 1, createdAt: 1 });
};


// =================================
// GET ACTIVE SERVICES BY CATEGORY
// =================================

const getActiveServicesByCategory = async (categoryId) => {
  return await Service.find({
    category: categoryId,
    status: true,
  })
    .populate("category", "name slug")
    .sort({ displayOrder: 1, createdAt: 1 });
};


// =================================
// GET SERVICE BY ID
// =================================

const getServiceById = async (id) => {
  return await Service.findById(id)
    .populate("category", "name slug");
};


// =================================
// GET SERVICE BY SLUG
// =================================

const getServiceBySlug = async (slug) => {
  return await Service.findOne({ slug })
    .populate("category", "name slug");
};


// =================================
// CREATE SERVICE
// =================================

const createService = async (data) => {
  return await Service.create(data);
};


// =================================
// UPDATE SERVICE
// =================================

const updateService = async (id, data) => {
  return await Service.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  ).populate("category", "name slug");
};


// =================================
// DELETE SERVICE
// =================================

const deleteService = async (id) => {
  return await Service.findByIdAndDelete(id);
};


// =================================
// EXPORTS
// =================================

module.exports = {
  getAllServices,
  getActiveServices,
  getServicesByCategory,
  getActiveServicesByCategory,
  getServiceById,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
};