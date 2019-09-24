const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk").default;
require("dotenv").config();

// console.log(chalk)

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authController")(app);

app.listen(3333);

console.log(chalk.bgHex("#33e026").black.bold("Serving in port 3333"));
