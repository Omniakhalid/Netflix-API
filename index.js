const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connection = require("./dbConfig/db.config");
connection();

//const movieRoutes = require("./modules/routes/movie.route");
const userRoutes = require("./modules/routes/user.route");
//app.use(movieRoutes);
app.use(userRoutes);

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
