const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
const app = express();
app.use(express.json());

const connection = require("./dbConfig/db.config");
connection();

const movieRoutes = require("./modules/routes/movie.route");
const userRoutes = require("./modules/routes/user.route");
const listRoutes = require("./modules/routes/list.route");

const enableCors = require("./middleware/enableCors");

//Enable Routing & nCors
app.use(userRoutes,enableCors);
app.use(movieRoutes, enableCors);
app.use(listRoutes, enableCors);

// app.use(userRoutes);
// app.use(movieRoutes);
// app.use(listRoutes);
//#endregion


app.listen(8000, () => {
  console.log("backend server is running.");
});
/*
{

    "title":"ok done",
    "description":"my first movie",
    "image": "img link",
    "thumbnail": "thumb",
    "video": "video link",
    "year": 2021
}

"userName": "omnia khaled",
    "email": "omnia@gmail.com",
    "password": "1234",
    "image": "img link",
    "phone": 1203563611
*/
