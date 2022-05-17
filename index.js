const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

const connection = require("./dbConfig/db.config");
connection();

const movieRoutes = require("./modules/routes/movie.route");
app.use(movieRoutes);

app.listen(8000, () => {
  console.log("backend server is running.");
});
