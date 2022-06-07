const List = require("../model/list.model");
//GET_ALL
const getGenre = async (req, res) => {
    try {
    res.status(200).json(await List.distinct('genre'));
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = getGenre;
