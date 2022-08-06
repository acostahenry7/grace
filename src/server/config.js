const { engine } = require("express-handlebars");
const path = require("path");
const routes = require("../routes");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const http = require("http");
const fs = require("fs");

/*//const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs')*/
//const flash = require('connect-flash');

module.exports = (app) => {
  //Listenin Port
  app.set("port", process.env.PORT || 3002);

  //Views
  app.set("views", path.join(__dirname, "../views"));

  app.engine(
    ".hbs",
    engine({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layouts"),
      extname: ".hbs",
    })
  );

  app.set("view engine", ".hbs");

  //Middlewares
  app.use(session({ secret: "eiesecret" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  //app.use(cookieParser());
  //app.use(cors(corsOptions))

  //Routes
  routes(app);
  //require('./app/routes/index')(app);
  //require('./app/routes/user.routes')(app);
  app.use("/public", express.static(path.join(__dirname, "../public")));

  return app;
};
