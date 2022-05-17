const mongoose = require("mongoose");

const movieSchema = require("../schema/movies.schema");
const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
