var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

router.get("/", function (req, res) {
  res.render("index");
});
//AUTHENTICATION AND AUTHORISATION+++++++++++++++++++++++++++++++++++++++++++++
// router.get("/profile", isLoggedIn,function (req, res) {
//   res.send("Wlcm to Profile");
// });

// router.post("/register", function (req, res) {
//   const userData = new userModel({
//     username: req.body.username,
//     secret: req.body.secret,
//   });
//   userModel
//     .register(userData, req.body.password)
//     .then(function (registereduser) {
//       passport.authenticate("local")(req, res, function () {
//         res.redirect("/profile");
//       });
//     });
// });

// router.post("/login",
//   passport.authenticate("local", {
//     successRedirect: "/profile",
//     failureRedirect: "/",
//   }),
//   function (req, res) {}
// );

// router.get("/logout", function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     } else {
//       res.redirect("/");
//     }
//   });
// });

// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next()
//     }
//     res.redirect("/")
// }//--------------------------------------------------------------------

//INTERMEDIATE MONGO DB++++++++++++++++++++++++++++++
// router.get("/create", async function (req, res) {
//   let userData = await userModel.create({
//     username: "Hanees",
//     nickname: "Honey",
//     desc: "i am learn the intermediate MONGO",
//     categories: ["js", "node", "react"],
//   });
//   res.send(userData);
// });

// router.get("/find", async function (req, res) {
//   var regex = new RegExp("^Hanees$", "i");
//   let user = await userModel.findOne({ username: regex });
//   res.send(user);
// });

// router.get("/find", async function (req, res) {
//   let user = await userModel.find({categories:{$all:["node"]}});
//   res.send(user);
// });

// router.get("/find", async function (req, res) {
//   const date1 = new Date("2023-12-10");
//   const date2 = new Date("2023-12-11");
//   let user = await userModel.find({
//     datecreated: {
//       $gte: date1,
//       $lte: date2,
//     },
//   });
//   res.send(user);
// });

// router.get("/find", async function (req, res) {
//   let user = await userModel.find({ categories: { $exists: true } });
//   res.send(user);
// });
// router.get("/find", async function (req, res) {
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         { $gte: [{ $strLenCP: "$nickname" }, 0] },
//         { $lte: [{ $strLenCP: "$nickname" }, 22] },
//       ],
//     },
//   });
//   res.send(user);
// });---------------------------------------------------------

// FLASH MESSAGE +++++++++++++++++++++++++++++++++++++++++
// router.get("/failed", function (req, res) {
//   req.flash("ageee", 15);
//   req.flash("Name", "Honey");
//   res.send("bngya");
// });

// router.get("/checkage", function (req, res) {
//   console.log(req.flash("ageee"), req.flash("Name"));
//   res.send("Check Kro terminal pe")
// });-------------------------------------------------------------

// // COOKIES+++++++++++++++++++++++++++++++++++++++++++++++++++
// router.get("/", function (req, res) {
//   res.cookie("Age", 25);
//   res.render("index");
// });

// router.get("/read", function (req, res) {
//   console.log(req.cookies.Age);
//   res.send("checkkk1234");
// });

// router.get("/dltcookie", function (req, res) {
//   res.clearCookie("Age");
//   res.send("clear hai cookie");
// }); //----------------------------------------------------

// SESSION +++++++++++++++++++++++++++++++++++++++++++++++++
// router.get("/", function (req, res) {
//   req.session.anyName = "Hello Session here"; //anyValue
//   res.render("index");
// });

// router.get("/checked", function (req, res) {
//   if (req.session.anyName === "Hello Session here") {
//     res.send("Check kiya hai Hello from session");
//   }else{
//     res.send("Destroy hogya")
//   }
// });
// router.get("/sessionDelete", function (req, res) {
//   req.session.destroy(function (err) {
//    if(err) throw err;
//     res.send("Destroyed");
//   });
// });-------------------------------------------------

// MONGO DB++++++++++++++++++++++++++++++++++++++++++
// router.get("/create",async function (req, res) {
//  const createANuser =  await userModel.create({
//     username: "Hanees",
//     age: 27,
//     name:"MD Hanees"
//   });
//   res.send(createANuser)
// });

// router.get("/find", async function(req, res){
// const allUser = await userModel.find()
// res.send(allUser);
// })

// router.get("/findOne", async function (req, res) {
//   const oneuser = await userModel.findOne({
//     username: "Hanees",
//   });
//   res.send(oneuser);
// });

// router.get("/delete", async function (req, res) {
//   const deleteData = await userModel.findOneAndDelete({
//     username: "Hanees",
//   });
//   res.send(deleteData);
// });-------------------------------------------------------

module.exports = router;
