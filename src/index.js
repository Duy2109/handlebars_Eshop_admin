const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes"); 
const db = require("./config/db"); // -> khai báo db rồi sử dụng db trong file config
const session = require("express-session");
const fileUpload = require('express-fileupload');
const mkdirp = require('mkdirp');
const multer = require('multer');
// const SortMiddleware = require("./app/middlewares/SortMiddleware");


//biến db . đến function connect() trong file config/db
db.connect();


//
app.use(
  express.urlencoded({
    extended: true,
  })
);


//
app.use(express.json());
//
app.use(fileUpload());
//
app.use(methodOverride("_method"));

//custom middleware
// app.use(SortMiddleware);

route(app);
app.use(express.static(path.join(__dirname, "public")));
//HTTP logger
// app.use(morgan("combined"));







//template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers:{
      eq: function (a, b) {
        return a === b;
      }
    }
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
