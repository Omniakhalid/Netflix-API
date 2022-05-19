const users = require("../model/users.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//GET ALL
const getAllUsers = async (req, res) => {
  const allUsers = await users.find({});
  res.json({ statusCode: 200, data:allUsers });
};

//GET_BY_ID
const getUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await users.findById({ _id });
  res.json({ statusCode: 200, data:user });
};

//SIGN-UP
const addUser = async (req, res) => {
  const { userName, email, password, image, phone, role } = req.body;
  const foundUser = await users.findOne({ email });
  if (foundUser) {
    res.json({ error: "email token" });
  } else {
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        res.json({ error: "error in hash" });
      } else {
        const hashedUser = await users.insertMany({
          userName,
          email,
          password: hash,
          image,
          phone,
          role,
        });
        res.json({ message: "User Added Successfully", hashedUser });
      }
    });
  }
};

//UPDATE
const updateUser = async (req, res) => {
  const { userName, email, password, image, phone, role } = req.body;
  const _id = req.params.id;
  await users
    .updateOne({ _id: _id }, { userName, email, password, image, phone, role })
    .then(() => {
      res.res.json({ message: "User Updated Successfully", hashedUser });
    })
    .catch((err) => res.json({ message: "error", err }));
};

//DELETE
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  await users
    .deleteMany({ _id })
    .then(() => res.send("User Deleted Successfully"));
};

//SIGN-IN
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await users.findOne({ email });

  if (!foundUser) {
    res.json({ error: "User notFound" });
  } else {
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        res.json({ error: "error in hash" });
      } else {
        const matchedUser = await bcrypt.compare(password, foundUser.password);
        if (matchedUser) {
          //Synchronous Sign with default (HMAC SHA256)
          var token = jwt.sign({ id: foundUser._id }, "shhhhh");
          res.json({ message: "Done with token", token });
        } else {
          res.json({ error: "invalid password" });
        }
      }
    });
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  signIn,
};
