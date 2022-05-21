const app = require("express").Router();
const{ getLists,
    deleteList,
    addList}=  require("../controller/list.controller");

app.get("/Netflix-API/list", getLists);
app.post("/Netflix-API/list", addList);
app.delete("/Netflix-API/list", deleteList);

module.exports = app;
