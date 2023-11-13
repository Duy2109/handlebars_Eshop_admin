const express = require("express");
const router = express.Router(); // khai báo router sử dụng hàm Router trong expressjs
const homePageController = require("../app/controllers/HomePageController");

router.get("/", homePageController.index);

module.exports = router;