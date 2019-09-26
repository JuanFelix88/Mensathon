/**
 * # Mensathon
 * > ### MongoDB operators:
 * > https://docs.mongodb.com/manual/reference/operator/query/#query-selectors
 */

const express = require("express");
const router = express.Router();
const middlewareToken = require("../middlewares/auth");
const User = require("../models/User");

router.use(middlewareToken);

// authenticate user (login)
router.get("/available", async (req, res) => {
  try {
    // @ts-ignore
    const { userId } = req;

    let users = await User.find({ team: { $eq: null } })
      .select("-__v -email -createdAt -_id")
      .limit(50);

    users = users.filter(user => {
      return user.id !== userId;
    });

    res.send({ data: users });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// get user by nickname
router.get("/user/:nick", async (req, res) => {
  const { nick } = req.params;
  const user = await User.findOne({ nickName: nick }).select(
    "-email -createdAt -_id -__v"
  );

  res.send({ user });
});

module.exports = app => app.use("/users", router);
