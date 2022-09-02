const express = require("express");

const app = express();

const costume = require("./routes/routes");

app.use("/", costume);

module.exports = app;
