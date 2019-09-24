const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_ACESS, {
  useMongoClient: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
