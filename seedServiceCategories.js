require("dotenv").config();

const mongoose = require("mongoose");
const ServiceCategory = require("./models/ServiceCategory");

const categories = [
  {
    name: "Xerox & Print",
    slug: "xerox-print",
    description: "Xerox and printing services",
    icon: "🖨️",
    isActive: true,
    displayOrder: 1,
  },
  {
    name: "Scan",
    slug: "scan",
    description: "Document and photo scanning services",
    icon: "📄",
    isActive: true,
    displayOrder: 2,
  },
  {
    name: "Lamination",
    slug: "lamination",
    description: "Document and card lamination services",
    icon: "📑",
    isActive: true,
    displayOrder: 3,
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description: "Graphic design and creative services",
    icon: "🎨",
    isActive: true,
    displayOrder: 4,
  },
  {
    name: "Stationery",
    slug: "stationery",
    description: "Stationery and office supplies",
    icon: "📚",
    isActive: true,
    displayOrder: 5,
  },
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected");

    for (const category of categories) {
      await ServiceCategory.findOneAndUpdate(
        { slug: category.slug },
        category,
        {
          upsert: true,
          new: true,
          setDefaultsOnInsert: true,
        }
      );
    }

    console.log("Service categories seeded successfully");

    await mongoose.disconnect();

    console.log("MongoDB disconnected");

    process.exit(0);
  } catch (error) {
    console.error("Seed categories error:", error);

    await mongoose.disconnect();

    process.exit(1);
  }
};

seedCategories();