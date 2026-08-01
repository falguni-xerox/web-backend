const express = require("express");

const {
  getServices,
  getActiveServices,
  getServicesByCategory,
  getActiveServicesByCategory,
  getServiceById,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const router = express.Router();


// =================================
// GET ALL SERVICES
// GET /api/services
// =================================

router.get("/", getServices);


// =================================
// GET ACTIVE SERVICES
// GET /api/services/active
// =================================

router.get("/active", getActiveServices);


// =================================
// GET SERVICES BY CATEGORY
// GET /api/services/category/:categoryId
// =================================

router.get(
  "/category/:categoryId",
  getServicesByCategory
);


// =================================
// GET ACTIVE SERVICES BY CATEGORY
// GET /api/services/category/:categoryId/active
// =================================

router.get(
  "/category/:categoryId/active",
  getActiveServicesByCategory
);


// =================================
// GET SERVICE BY SLUG
// GET /api/services/slug/:slug
// =================================

router.get(
  "/slug/:slug",
  getServiceBySlug
);


// =================================
// GET SERVICE BY ID
// GET /api/services/:id
// =================================

router.get("/:id", getServiceById);


// =================================
// CREATE SERVICE
// POST /api/services
// =================================

router.post("/", createService);


// =================================
// UPDATE SERVICE
// PUT /api/services/:id
// =================================

router.put("/:id", updateService);


// =================================
// DELETE SERVICE
// DELETE /api/services/:id
// =================================

router.delete("/:id", deleteService);


module.exports = router;