const users = require("../model/users.model");

//GET ALL
const getAllUsers = async (req, res) => {
  const allUsers = await users.find({});
  res.json({ statusCode: 200, allUsers });
};

//GET_BY_ID
const getUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await users.findById({ _id });
  res.json({ statusCode: 200, user });
};

//CREATE
const addUser = async (req, res) => {
  const { userName, email, password, image, phone, role } = req.body;
  await users
    .insertMany({ userName, email, password, image, phone, role })
    .then(() => {
      res.send("User Added Successfully");
    })
    .catch((err) => res.json({ message: "error", err }));
};
//UPDATE
const updateUser = async (req, res) => {
  const { userName, email, password, image, phone, role } = req.body;
  const _id = req.params.id;
  await users
    .updateOne({ _id: _id }, { userName, email, password, image, phone, role })
    .then(() => {
      res.send("User Updated Successfully");
    });
};

//DELETE
const deleteUser = async (req, res) => {
  const _id = req.params.id;
  await users
    .deleteMany({ _id })
    .then(() => res.send("User Deleted Successfully"));
};
module.exports = {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
