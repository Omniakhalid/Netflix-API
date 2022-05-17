const app = require("express").Router();
const {
  getUserById,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controller/users.controller");

app.get("/Netflix-API/getUserById/:id", getUserById);
app.get("/Netflix-API/getAllUsers", getAllUsers);
app.post("/Netflix-API/addUser", addUser);
app.put("/Netflix-API/updateUser/:id", updateUser);
app.delete("/Netflix-API/deleteUser/:id", deleteUser);
module.exports = app;
