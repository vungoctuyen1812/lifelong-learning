const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine Ejs
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("views", path.join(__dirname + "/resources/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
