const express = require("express");
const router = express.Router(); // khai báo router sử dụng hàm Router trong expressjs
const pageController = require("../app/controllers/PageController");

router.get("/add-page",pageController.addpage);
router.post("/add-page-store",pageController.addPageStore);
router.get("/:id/edit-page",pageController.editPage);
router.put("/:id",pageController.update);
router.patch("/:id/restore",pageController.restore);
router.delete("/:id",pageController.delete);
router.delete("/:id/force",pageController.forcedelete);
router.get("/",pageController.index);


module.exports = router;