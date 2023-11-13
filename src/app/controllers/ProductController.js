const Product = require("../models/Product");
const { mongooseToObject } = require("../../until/mongoose");
const fs = require("fs").promises; // Node.js file system module with promises
const path = require("path");

class ProductController {
  index(req, res, next) {
    res.send("page home");
  }

  addproduct(req, res, next) {
    res.render("product/add-product");
  }

  


  addProductStore(req, res, next) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.redirect("/allproduct/stored/all-product"))
      .catch(next);
  }

  editProduct(req, res, next) {
    Product.findById(req.params.id)
      .then((product) =>
        res.render("product/edit-product", {
          product: mongooseToObject(product),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/allproduct/stored/all-product"))
      .catch(next);
  }

  delete(req, res, next) {
    Product.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  restore(req, res, next) {
    Product.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  forcedelete(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ProductController();
