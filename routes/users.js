// const mongoose = require("mongoose");
// // Database Name = suvingye
// mongoose.connect("mongodb://127.0.0.1:27017/suvingye");

// // Doocument data = username, name , age
// const userSchema = mongoose.Schema({
//   username: String,
//   name: String,
//   age: Number,
// });

// // Collection Name = UserName
// module.exports = mongoose.model("UserName", userSchema);

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/endgm2");
const userSchema = mongoose.Schema({
  username: String,
  pass: String,
  secret: String,
});
userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);
