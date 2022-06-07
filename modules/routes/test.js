const app = require("express").Router();

const {

  getAllUsers,
  
} = require("../controller/test");
app.get("/Netflix-API/getTest", getAllUsers);

module.exports = app;