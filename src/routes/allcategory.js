const express = require("express");
const router = express.Router();
const allcategoryController = require("../app/controllers/AllCategoryController");

router.get("/stored/all-category", allcategoryController.storedCourses);
router.get("/trash/all-trash-category", allcategoryController.trashCourses);


module.exports = router;