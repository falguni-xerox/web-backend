require("dotenv").config();

const mongoose = require("mongoose");

const Service = require("./models/Service");
const ServiceCategory = require("./models/ServiceCategory");

const services = [
  // =================================
  // XEROX & PRINT
  // =================================

  {
    name: "B&W Xerox",
    slug: "bw-xerox",
    categorySlug: "xerox-print",
    shortDescription: "Black and white document Xerox service.",
    description:
      "Fast and clear black and white Xerox service for documents, forms and other papers.",
    icon: "fa-copy",
    price: "",
    status: true,
    displayOrder: 1,
  },

  {
    name: "Color Print",
    slug: "color-print",
    categorySlug: "xerox-print",
    shortDescription: "High-quality color document printing.",
    description:
      "Quality color printing service for documents, projects, forms and other important files.",
    icon: "fa-print",
    price: "",
    status: true,
    displayOrder: 2,
  },

  {
    name: "Single Side Print",
    slug: "single-side-print",
    categorySlug: "xerox-print",
    shortDescription: "Single-side document printing.",
    description:
      "Single-side printing service for documents and other files.",
    icon: "fa-file",
    price: "",
    status: true,
    displayOrder: 3,
  },

  {
    name: "Double Side Print",
    slug: "double-side-print",
    categorySlug: "xerox-print",
    shortDescription: "Double-side document printing.",
    description:
      "Double-side printing service to save paper and printing cost.",
    icon: "fa-copy",
    price: "",
    status: true,
    displayOrder: 4,
  },


  // =================================
  // SCAN
  // =================================

  {
    name: "Document Scan",
    slug: "document-scan",
    categorySlug: "scan",
    shortDescription: "Scan important documents.",
    description:
      "Document scanning service for forms, certificates, applications and other papers.",
    icon: "fa-file-lines",
    price: "",
    status: true,
    displayOrder: 1,
  },

  {
    name: "Photo Scan",
    slug: "photo-scan",
    categorySlug: "scan",
    shortDescription: "Scan photos and images.",
    description:
      "Photo and image scanning service for preserving and sharing important pictures.",
    icon: "fa-image",
    price: "",
    status: true,
    displayOrder: 2,
  },


  // =================================
  // LAMINATION
  // =================================

  {
    name: "A4 Lamination",
    slug: "a4-lamination",
    categorySlug: "lamination",
    shortDescription: "A4 document lamination.",
    description:
      "Protect important A4 documents with quality lamination.",
    icon: "fa-layer-group",
    price: "",
    status: true,
    displayOrder: 1,
  },

  {
    name: "ID Card Lamination",
    slug: "id-card-lamination",
    categorySlug: "lamination",
    shortDescription: "ID card and small document lamination.",
    description:
      "Lamination service for ID cards and other small important documents.",
    icon: "fa-id-card",
    price: "",
    status: true,
    displayOrder: 2,
  },


  // =================================
  // GRAPHIC DESIGN
  // =================================

  {
    name: "Poster Design",
    slug: "poster-design",
    categorySlug: "graphic-design",
    shortDescription: "Creative poster design service.",
    description:
      "Professional poster design for businesses, events, promotions and advertisements.",
    icon: "fa-image",
    price: "",
    status: true,
    displayOrder: 1,
  },

  {
    name: "Visiting Card",
    slug: "visiting-card",
    categorySlug: "graphic-design",
    shortDescription: "Professional visiting card design.",
    description:
      "Creative and professional visiting card design for personal and business use.",
    icon: "fa-address-card",
    price: "",
    status: true,
    displayOrder: 2,
  },

  {
    name: "Banner Design",
    slug: "banner-design",
    categorySlug: "graphic-design",
    shortDescription: "Creative banner design service.",
    description:
      "Custom banner design for business promotions, events and advertisements.",
    icon: "fa-panorama",
    price: "",
    status: true,
    displayOrder: 3,
  },


  // =================================
  // STATIONERY
  // =================================

  {
    name: "Files",
    slug: "files",
    categorySlug: "stationery",
    shortDescription: "Files and document folders.",
    description:
      "Files and folders for organizing documents and office work.",
    icon: "fa-folder",
    price: "",
    status: true,
    displayOrder: 1,
  },

  {
    name: "Notebook",
    slug: "notebook",
    categorySlug: "stationery",
    shortDescription: "Notebooks for school, college and office use.",
    description:
      "Notebooks suitable for school, college, personal and office work.",
    icon: "fa-book",
    price: "",
    status: true,
    displayOrder: 2,
  },

  {
    name: "Pens",
    slug: "pens",
    categorySlug: "stationery",
    shortDescription: "Pens for writing and office work.",
    description:
      "Writing pens for school, college, office and everyday use.",
    icon: "fa-pen",
    price: "",
    status: true,
    displayOrder: 3,
  },
];


// =================================
// SEED SERVICES
// =================================

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    for (const serviceData of services) {

      // Find category using slug
      const category = await ServiceCategory.findOne({
        slug: serviceData.categorySlug,
      });

      if (!category) {
        console.error(
          `Category not found: ${serviceData.categorySlug}`
        );

        continue;
      }

      // Remove categorySlug before saving
      const {
        categorySlug,
        ...service
      } = serviceData;

      // Add category ObjectId
      service.category = category._id;

      // Create or update service
      await Service.findOneAndUpdate(
        { slug: service.slug },
        service,
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    }

    console.log("Services seeded successfully");

    await mongoose.disconnect();

    console.log("MongoDB disconnected");

    process.exit(0);

  } catch (error) {
    console.error("Seed services error:", error);

    await mongoose.disconnect();

    process.exit(1);
  }
};

seedServices();