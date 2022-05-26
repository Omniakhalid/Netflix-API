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
const testRoutes = require("./modules/routes/test");

const enableCors = require("./middleware/enableCors");
const port = process.env.PORT || 3000


const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions))


//Enable Routing & nCors
app.use(userRoutes,cors(corsOptions));
app.use(movieRoutes, cors(corsOptions));
app.use(listRoutes, cors(corsOptions));
app.use(testRoutes,cors(corsOptions));




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
