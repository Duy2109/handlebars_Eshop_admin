const express = require("express");
const router = express.Router();
const allProductController = require("../app/controllers/AllProductController");

router.get("/stored/all-product", allProductController.storedCourses);
router.get("/trash/all-trash-product", allProductController.trashCourses);


module.exports = router;