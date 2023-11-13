const express = require("express");
const router = express.Router(); // khai báo router sử dụng hàm Router trong expressjs
const categoryController = require("../app/controllers/CategoryController");

router.get("/add-category",categoryController.addcategory);
router.post("/add-category-store",categoryController.addCategoryStore);
router.get("/:id/edit-category",categoryController.editCategory);
router.put("/:id",categoryController.update);
router.patch("/:id/restore",categoryController.restore);
router.delete("/:id",categoryController.delete);
router.delete("/:id/force",categoryController.forcedelete);


module.exports = router;