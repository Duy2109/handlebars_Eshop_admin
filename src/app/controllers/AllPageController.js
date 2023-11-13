const Page = require("../models/Page");
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



    Promise.all([Page.find({}), Page.findDeleted({ deleted: false })])
      .then(([pages, deletedCount]) =>
        res.render("allpage/all-page", {
          deletedCount:deletedCount.filter((page) => page.deleted).length,
          pages: mutipleMongooseToObject(pages),
        })
      )
      .catch(next);
  }


  trashCourses(req, res, next) {
    Page.findWithDeleted({ deleted: true })
      .then((pages) =>
        res.render("allpage/all-trash-page", {
          pages: mutipleMongooseToObject(pages),
        })
      )
      .catch(next);
  }
}

module.exports = new AllPageController();