const express = require("express");
const router = express.Router();
const allpageController = require("../app/controllers/AllPageController");

router.get("/stored/all-page", allpageController.storedCourses);
router.get("/trash/all-trash-page", allpageController.trashCourses);


module.exports = router;