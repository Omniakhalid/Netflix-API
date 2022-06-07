const app = require("express").Router();
const{ getLists,
    deleteList,
    addList } = require("../controller/list.controller");
const getGenre = require("../controller/genre.controller");

app.get("/Netflix-API/list", getLists);
app.post("/Netflix-API/list", addList);
app.delete("/Netflix-API/list", deleteList);
app.get("/Netflix-API/genres", getGenre);
module.exports = app;
