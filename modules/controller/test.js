const users = require("../model/users.model");


//GET ALL
const getAllUsers = async (req, res) => {
  const allUsers = await users.find({});
  res.json({ statusCode: 200, data:allUsers });
};
module.exports = {
    getAllUsers};