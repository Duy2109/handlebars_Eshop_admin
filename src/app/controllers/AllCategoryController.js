const Category = require("../models/Category");
const { mutipleMongooseToObject } = require("../../until/mongoose");

class AllPageController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    
    // let courseQuery= Course.find({});

    // if(req.query.hasOwnProperty('_sort')){
    //   courseQuery=courseQuery.sort({
    //     [req.query.column]:req.query.type
    //   });
    // }



    Promise.all([Category.find({}), Category.findDeleted({ deleted: false })])
      .then(([categories, deletedCount]) =>
        res.render("allcategory/all-category", {
          deletedCount:deletedCount.filter((category) => category.deleted).length,
          categories: mutipleMongooseToObject(categories),
        })
      )
      .catch(next);
  }


  trashCourses(req, res, next) {
    Category.findWithDeleted({ deleted: true })
      .then((categories) =>
        res.render("allcategory/all-trash-category", {
          categories: mutipleMongooseToObject(categories),
        })
      )
      .catch(next);
  }
}

module.exports = new AllPageController();