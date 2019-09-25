const express = require("express");
const router = express.Router();
const middlewareToken = require("../middlewares/auth");
const User = require("../models/User");
const Team = require("../models/Team");
const jwt = require("jsonwebtoken");

router.use(middlewareToken);

// get info team
// @ts-ignore
router.get("/team/:nickName", async ({ params }, res) => {
  try {
    /**@type {import('../models').Team} */
    // @ts-ignore
    let team = await Team.findOne({ nickName: params.nickName })
      .select("-_id")
      .select("-__v")
      .select("-createdAt")
      .populate({
        path: "leader",
        select: "-_id -email -createdAt -__v"
      })
      .populate({
        path: "participants",
        select: "-_id -email -createdAt -__v"
      });

    res.send({ team });
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

// get info team
router.post("/register", async (req, res) => {
  try {
    // @ts-ignore
    const { userId } = req;
    const body = req.body;

    const user = await User.findById(userId);
    // @ts-ignore
    if (user.team !== null) throw "You are already registered in a team";

    const team = await Team.create({ ...body, leader: userId });
    await User.findByIdAndUpdate(userId, { team: team._id });

    res.status(201).send({ team });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// get info team
// @ts-ignore
router.get("/available", async (req, res) => {
  try {
    /**@type {import('../models').Team[]} */
    // @ts-ignore
    let teams = await Team.find({ amountParticipants: { $lt: 5 } })
      .select("-_id")
      .select("-__v")
      .select("-createdAt")
      .select("-leader")
      .select("-participants");

    res.send({ teams: teams });
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

// get info team
// @ts-ignore
router.get("/ingress/:nick", async ({ params, userId }, res) => {
  try {
    const nick = params.nick;
    /**@type {import('../models').User} */
    // @ts-ignore
    const user = await User.findById(userId);

    if (user.team !== null) throw "You are already registered in a team";

    /**@type {import('../models').Team} */
    // @ts-ignore
    let team = await Team.findOne({ nickName: nick });

    if (team.amountParticipants > 4)
      throw "The team has reached the participant limit";

    if (team.leader === userId)
      throw "The team has reached the participant limit";

    team.participants.forEach(participant => {
      if (participant === userId) throw "You have already joined the team";
    });

    team.participants = [...team.participants, userId];
    team.amountParticipants += 1;
    user.team = team._id;

    await Team.updateOne({ _id: team._id }, team);
    await User.updateOne({ _id: user._id }, user);

    res.send({ sucess: true, team: team });
  } catch (error) {
    res.status(400).send({ sucess: false, error: error });
  }
});

module.exports = app => app.use("/teams", router);
