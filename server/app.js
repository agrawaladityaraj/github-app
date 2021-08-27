var express = require("express");
var path = require("path");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build", "index.html"));
});

module.exports = app;
