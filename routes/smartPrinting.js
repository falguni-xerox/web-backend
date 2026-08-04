const express = require("express");

const router = express.Router();

const controller =
  require("../controllers/smartPrintingController");


// ======================================
// GET ALL LANGUAGES
// ======================================

router.get(
  "/",
  controller.getAll
);


// ======================================
// GET LANGUAGE CONTENT
// ======================================

router.get(
  "/:language",
  controller.getByLanguage
);


// ======================================
// UPDATE LANGUAGE CONTENT
// ======================================

router.put(
  "/:language",
  controller.updateByLanguage
);


// ======================================
// DELETE LANGUAGE CONTENT
// ======================================

router.delete(
  "/:language",
  controller.deleteByLanguage
);


module.exports = router;