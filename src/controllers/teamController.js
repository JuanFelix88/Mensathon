const express = require("express");
const router = express.Router();
const middlewareToken = require("../middlewares/auth");

router.use(middlewareToken);

// authenticate user (login)
router.post("/authtoken", async (req, res) => {
  res.send({ sucess: true });
});

module.exports = app => app.use("/auth", router);
