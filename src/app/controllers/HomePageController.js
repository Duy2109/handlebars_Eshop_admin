const Page = require('../models/Page');
const {mutipleMongooseToObject} = require('../../until/mongoose')




class HomePageController {
  index(req, res, next) {
      res.send('homepage');
  }


}


module.exports = new HomePageController();
