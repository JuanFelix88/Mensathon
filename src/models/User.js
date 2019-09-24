const mongoose = require("../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  nickName: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  job: {
    type: String,
    required: true
  },
  team: {
    type: String,
    default: null
  },
  image: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// @ts-ignore
UserSchema.pre("save", async function(next) {
  // @ts-ignore
  const hash = await bcrypt.hash(this.password, 10);
  // @ts-ignore
  this.password = hash;
  next();
});

const user = mongoose.model("User", UserSchema);
module.exports = user;
