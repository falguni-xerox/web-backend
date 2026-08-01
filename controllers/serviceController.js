const serviceRepository = require("../repositories/serviceRepository");

// =================================
// GET ALL SERVICES
// GET /api/services
// =================================

const getServices = async (req, res) => {
  try {
    const services =
      await serviceRepository.getAllServices();

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error(
      "Get services error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};


// =================================
// GET ACTIVE SERVICES
// GET /api/services/active
// =================================

const getActiveServices = async (req, res) => {
  try {
    const services =
      await serviceRepository.getActiveServices();

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error(
      "Get active services error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch active services",
    });
  }
};


// =================================
// GET SERVICES BY CATEGORY
// GET /api/services/category/:categoryId
// =================================

const getServicesByCategory = async (req, res) => {
  try {
    const services =
      await serviceRepository.getServicesByCategory(
        req.params.categoryId
      );

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error(
      "Get services by category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch services by category",
    });
  }
};


// =================================
// GET ACTIVE SERVICES BY CATEGORY
// GET /api/services/category/:categoryId/active
// =================================

const getActiveServicesByCategory = async (
  req,
  res
) => {
  try {
    const services =
      await serviceRepository.getActiveServicesByCategory(
        req.params.categoryId
      );

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error(
      "Get active services by category error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch active services by category",
    });
  }
};


// =================================
// GET SERVICE BY ID
// GET /api/services/:id
// =================================

const getServiceById = async (req, res) => {
  try {
    const service =
      await serviceRepository.getServiceById(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.error(
      "Get service error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};


// =================================
// GET SERVICE BY SLUG
// GET /api/services/slug/:slug
// =================================

const getServiceBySlug = async (req, res) => {
  try {
    const service =
      await serviceRepository.getServiceBySlug(
        req.params.slug
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    console.error(
      "Get service by slug error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};


// =================================
// CREATE SERVICE
// POST /api/services
// =================================

const createService = async (req, res) => {
  try {
    const {
      name,
      slug,
      category,
      shortDescription,
      description,
      icon,
      image,
      price,
      status,
      displayOrder,
    } = req.body;


    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (
      !name ||
      !slug ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, slug and category are required",
      });
    }


    // -----------------------------
    // DUPLICATE SLUG CHECK
    // -----------------------------

    const existingService =
      await serviceRepository.getServiceBySlug(
        slug
      );

    if (existingService) {
      return res.status(409).json({
        success: false,
        message:
          "A service with this slug already exists",
      });
    }


    // -----------------------------
    // CREATE
    // -----------------------------

    const service =
      await serviceRepository.createService({
        name: name.trim(),
        slug: slug.trim().toLowerCase(),
        category,
        shortDescription,
        description,
        icon,
        image,
        price,
        status:
          status !== undefined
            ? status
            : true,
        displayOrder:
          displayOrder !== undefined
            ? Number(displayOrder)
            : 0,
      });


    // -----------------------------
    // FETCH POPULATED SERVICE
    // -----------------------------

    const populatedService =
      await serviceRepository.getServiceById(
        service._id
      );


    res.status(201).json({
      success: true,
      message:
        "Service created successfully",
      service: populatedService,
    });

  } catch (error) {
    console.error(
      "Create service error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to create service",
    });
  }
};


// =================================
// UPDATE SERVICE
// PUT /api/services/:id
// =================================

const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;

    const {
      name,
      slug,
      category,
      shortDescription,
      description,
      icon,
      image,
      price,
      status,
      displayOrder,
    } = req.body;


    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (
      name !== undefined &&
      !name.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Service name cannot be empty",
      });
    }


    if (
      slug !== undefined &&
      !slug.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Service slug cannot be empty",
      });
    }


    // -----------------------------
    // DUPLICATE SLUG CHECK
    // -----------------------------

    if (slug) {
      const existingService =
        await serviceRepository.getServiceBySlug(
          slug
        );

      if (
        existingService &&
        existingService._id.toString() !==
          serviceId
      ) {
        return res.status(409).json({
          success: false,
          message:
            "A service with this slug already exists",
        });
      }
    }


    // -----------------------------
    // UPDATE DATA
    // -----------------------------

    const updateData = {
      name:
        name !== undefined
          ? name.trim()
          : undefined,

      slug:
        slug !== undefined
          ? slug.trim().toLowerCase()
          : undefined,

      category,
      shortDescription,
      description,
      icon,
      image,
      price,
      status,

      displayOrder:
        displayOrder !== undefined
          ? Number(displayOrder)
          : undefined,
    };


    // Remove undefined values

    Object.keys(updateData).forEach(
      (key) => {
        if (
          updateData[key] === undefined
        ) {
          delete updateData[key];
        }
      }
    );


    // -----------------------------
    // UPDATE
    // -----------------------------

    const service =
      await serviceRepository.updateService(
        serviceId,
        updateData
      );


    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }


    // -----------------------------
    // FETCH POPULATED SERVICE
    // -----------------------------

    const populatedService =
      await serviceRepository.getServiceById(
        service._id
      );


    res.status(200).json({
      success: true,
      message:
        "Service updated successfully",
      service: populatedService,
    });

  } catch (error) {
    console.error(
      "Update service error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to update service",
    });
  }
};


// =================================
// DELETE SERVICE
// DELETE /api/services/:id
// =================================

const deleteService = async (req, res) => {
  try {
    const service =
      await serviceRepository.deleteService(
        req.params.id
      );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Service deleted successfully",
    });

  } catch (error) {
    console.error(
      "Delete service error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to delete service",
    });
  }
};


// =================================
// EXPORTS
// =================================

module.exports = {
  getServices,
  getActiveServices,
  getServicesByCategory,
  getActiveServicesByCategory,
  getServiceById,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
};