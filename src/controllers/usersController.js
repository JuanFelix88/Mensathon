const express = require("express");
const router = express.Router();
const middlewareToken = require("../middlewares/auth");
const User = require("../models/User");

router.use(middlewareToken);

// authenticate user (login)
router.get("/available", async (req, res) => {
  const { userId } = req.body;
  const users = await User.find({ team: null, _id: { $ne: userId } })
    .limit(10)
    .select("-email")
    .select("-createdAt");

  res.send({
    data: users
      .filter(({ _id }) => {
        return _id !== userId;
      })
      .map(doc => {
        doc._id = undefined;
        return doc;
      })
  });
});

// get user by nickname
router.get("/user/:nick", async (req, res) => {
  const { nick } = req.params
  const user = await User.findOne({ nickName: nick})
    .select("-email")
    .select("-createdAt");

  res.send({ user });
});

module.exports = app => app.use("/users", router);
