const Category = require("../models/Category");
const { mongooseToObject } = require("../../until/mongoose");

class PageController {


  addcategory(req, res, next) {
    res.render("category/add-category");
  }

  addCategoryStore(req, res, next) {
    const category = new Category(req.body);
    category
      .save()
      .then(() => res.redirect("/allcategory/stored/all-category"))
      .catch(next);
  }

  editCategory(req, res, next) {
    Category.findById(req.params.id)
      .then((category) =>
        res.render("category/edit-category", {
          category: mongooseToObject(category),
        }),
      )
      .catch(next);
  }




  update(req, res, next) {
    Category.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/allcategory/stored/all-category"))
      .catch(next);
  }

  delete(req, res, next) {
    Category.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  restore(req, res, next) {
    Category.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  forcedelete(req, res, next) {
    Category.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new PageController();
