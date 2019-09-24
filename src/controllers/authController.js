const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();
// @ts-ignore

function generateToken(userId, authConfig, expiresIn) {
  return jwt.sign({ id: userId }, authConfig, {
    expiresIn: expiresIn
  });
}

// register new user (register)
router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    // @ts-ignore
    user.password = undefined;

    const token = generateToken(user.id, process.env.APP_HASH, 86400);

    return res.send({ user, token });
  } catch (error) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

// authenticate user (login)
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "User not found" });

  // @ts-ignore
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid passowrd" });

  // @ts-ignore
  user.password = undefined;

  const token = generateToken(user.id, process.env.APP_HASH, 86400);

  res.send({ user, token });
});

module.exports = app => app.use("/auth", router);
