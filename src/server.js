const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk").default;
require("dotenv").config();
const cors = require("cors");

// console.log(chalk)

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.APP_FRONT }));

require("./controllers/authController")(app);
require("./controllers/teamController")(app);
require("./controllers/usersController")(app);

app.listen(3333);

console.log(chalk.bgHex("#33e026").black.bold("Serving in port 3333"));
