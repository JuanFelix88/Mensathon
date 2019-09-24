const mongoose = require("../database");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nickName: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: [],
    unique: true
  }],
  amountParticipants: {
    type: Number,
    default: 1
  },
  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Team", TeamSchema);
