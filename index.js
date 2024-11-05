const express = require("express");
const app = express();
var bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  //menghilangkan OPTION
  if (req.method === "OPTIONS") {
    var headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = "86400"; // 24 hours
    headers["Access-Control-Allow-Headers"] =
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization";
    res.writeHead(200, headers);
    res.end();
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,Content-Type, X-Requested-With, Access-Control-Allow-Headers, Accept, Authorization",
    );
    next();
  }
});

app.get("/", function (req, res) {
  res.send("Welcome to WsBEKuber " + process.env.NODE_ENV);
});
app.use("/pegawai", require("./src/routes/pegawai"));
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ` + process.env.PORT);
});
