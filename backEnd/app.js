const express = require("express");
const app = new express();

const router = require("./src/routes/api");
const bodyParser = require("body-parser");

//Security Middleware
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

// Databage
const mongoose = require("mongoose");

//Middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//BodyParser

app.use(bodyParser.json());

//RateLimit

//Databage

let URI =
  "mongodb+srv://<username>:<password>@cluster0.eq5zxrj.mongodb.net/StudentAdmission";
let OPTION = { user: "rakib", pass: "rakib1122", autoIndex: true };
mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err);
  });
//Route

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
