const app = require("express").Router();
const {
  getMovieById,
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movies.controller");

app.get("/Netflix-API/getMovieById/:id", getMovieById);
app.get("/Netflix-API/allMovies", getAllMovies);
app.post("/Netflix-API/addMovie", addMovie);
app.put("/Netflix-API/updateMovie/:id", updateMovie);
app.delete("/Netflix-API/deleteMovie/:id", deleteMovie);

module.exports = app;
