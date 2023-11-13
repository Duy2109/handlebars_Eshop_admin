const Page = require("../models/Page");
const { mongooseToObject } = require("../../until/mongoose");

class PageController {
  index(req, res, next) {
    res.send("page home");
  }

  addpage(req, res, next) {
    res.render("page/add-page");
  }

  addPageStore(req, res, next) {
    const page = new Page(req.body);
    page
      .save()
      .then(() => res.redirect("/allpage/stored/all-page"))
      .catch(next);
  }

  editPage(req, res, next) {
    Page.findById(req.params.id)
      .then((page) =>
        res.render("page/edit-page", {
          page: mongooseToObject(page),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    Page.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/allpage/stored/all-page"))
      .catch(next);
  }

  delete(req, res, next) {
    Page.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  restore(req, res, next) {
    Page.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  forcedelete(req, res, next) {
    Page.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new PageController();
