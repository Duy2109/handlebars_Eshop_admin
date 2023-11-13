const express = require("express");
const router = express.Router(); // khai báo router sử dụng hàm Router trong expressjs
const productController = require("../app/controllers/ProductController");

router.get("/add-product",productController.addproduct);
router.post("/add-product-store",productController.addProductStore);
router.get("/:id/edit-product",productController.editProduct);
router.put("/:id",productController.update);
router.patch("/:id/restore",productController.restore);
router.delete("/:id",productController.delete);
router.delete("/:id/force",productController.forcedelete);
router.get("/",productController.index);


module.exports = router;