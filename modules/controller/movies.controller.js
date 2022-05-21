const movies = require("../model/movies.model");

//GET ALL
const getAllMovies = async (req, res) => {
  const allMovies = await movies.find({});
  res.json({ statusCode: 200, data:allMovies });
};

//GET_BY_ID
const getMovieById = async (req, res) => {
  const _id = req.params.id;

  const movie = await movies.findById({ _id });
  res.json({ statusCode: 200, data:movie });
};

//CREATE
const addMovie = async (req, res) => {
  const { title, description, image, thumbnail, video, year, duration,category} =
    req.body;
  await movies
    .insertMany({ title, description, image, thumbnail, video, year, duration })
    .then(() => {
      res.send("added Successfully");
    })
    .catch((err) => res.json({ message: "my error", err }));
};
//UPDATE
const updateMovie = async (req, res) => {
  const { title, description, image, thumbnail, video, year, duration } =
    req.body;
  const _id = req.params.id;
  await movies
    .updateOne(
      { _id: _id },
      { title, description, image, thumbnail, video, year, duration }
    )
    .then(() => {
      res.send("Updated Successfully");
    });
};

//DELETE
const deleteMovie = async (req, res) => {
  const _id = req.params.id;
  await movies.deleteMany({ _id }).then(() => res.send("Deleted Successfully"));
};
module.exports = {
  getMovieById,
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
