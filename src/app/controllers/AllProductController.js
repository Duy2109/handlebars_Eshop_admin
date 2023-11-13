const Product = require("../models/Product");
const { mutipleMongooseToObject } = require("../../until/mongoose");

class AllProductController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    
    // let courseQuery= Course.find({});

    // if(req.query.hasOwnProperty('_sort')){
    //   courseQuery=courseQuery.sort({
    //     [req.query.column]:req.query.type
    //   });
    // }



    Promise.all([Product.find({}), Product.findDeleted({ deleted: false })])
      .then(([products, deletedCount]) =>
        res.render("allproduct/all-product", {
          deletedCount:deletedCount.filter((product) => product.deleted).length,
          products: mutipleMongooseToObject(products),
        })
      )
      .catch(next);
  }


  trashCourses(req, res, next) {
    Product.findWithDeleted({ deleted: true })
      .then((products) =>
        res.render("allproduct/all-trash-product", {
          products: mutipleMongooseToObject(products),
        })
      )
      .catch(next);
  }
}

module.exports = new AllProductController();