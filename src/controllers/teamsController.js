const express = require("express");
const router = express.Router();
const middlewareToken = require("../middlewares/auth");
const User = require('../models/User')
const Team = require('../models/Team')
const jwt = require("jsonwebtoken");

router.use(middlewareToken);

// get info team
// @ts-ignore
router.get("/team/:nickName", async ({ userId, params }, res) => {
  try {
    /**@type {import('../models').User} */ 
    // @ts-ignore
    const user = await User.findById(userId)
    /**@type {import('../models').Team} */ 
    // @ts-ignore
    const team = await Team.findOne({ nickName: params.nickName })
      .select('-_id')
      .select('-__v')
      .select('-createdAt')
      .populate('leader')
      .populate('participants')
    
    team.leader.team = undefined
    team.leader._id = undefined
    team.leader.createdAt = undefined

    res.send({ team });
  } catch (error) {
    res.status(404).send({ error: error });    
  }
});

// get info team
router.post("/register", async (req, res) => {
  try {
    // @ts-ignore
    const { userId } = req
    const body = req.body

    const team = await Team.create({ ...body, leader: userId})

    await User.findByIdAndUpdate(userId, { team: team._id })
    
    res.send({ team }); 
  } catch (error) {
    res.status(400).send({ error: 'Register failed!' }); 
  }
});

// get info team
// @ts-ignore
router.get("/available", async (req, res) => {
  try {
    /**@type {import('../models').Team[]} */ 
    // @ts-ignore
    let teams = await Team.find({ amountParticipants: { $lt: 5 } })
      .select('-_id')
      .select('-__v')
      .select('-createdAt')
      .select('-leader')
      .select('-participants')

    res.send({ teams: teams });
  } catch (error) {
    res.status(404).send({ error: error });    
  }
});

// get info team
// @ts-ignore
router.get("/ingress/:nick", async ({ params, userId }, res) => {
  try {
    const nick = params.nick
    /**@type {import('../models').User} */ 
    // @ts-ignore
    const user = await User.findById(userId)

    if (user.team !== null) throw new Error('You are already registered in a team.')

    /**@type {import('../models').Team} */ 
    // @ts-ignore
    let team = await Team.findOne({ nickName: nick })

    if (team.amountParticipants > 4) throw new Error('The team has reached the participant limit.')
    if (team.leader === userId) throw new Error('The team has reached the participant limit.')

    team.participants.forEach(participant => {
      if (participant === userId) throw new Error('You have already joined the team.')
    })

    team.participants = [...team.participants, userId]
    team.amountParticipants += 1

    team = await Team.updateOne({_id: team._id}, team)
      .populate('participants')

    res.send({ sucess: true, team })
    } catch (error) {
      console.error(error)
      res.status(400).send({ sucess: false, error: error });    
  }
});

module.exports = app => app.use("/teams", router);
