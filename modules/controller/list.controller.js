const List = require("../model/list.model");
// const Movie = require("../model/movies.model");
// const helper = require("../../utils/helper");
//GET_ALL
const getLists = async (req, res) => {
 const typeQuery = req.query.type;
 const genreQuery = req.query.genre;
  let list = [];
  try {
    const searchObj = {};
    if(typeQuery) searchObj['type'] = typeQuery;
    if (genreQuery) searchObj['genre'] = genreQuery;
    list = await List.find({...searchObj}).populate("content");
    res.status(200).json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


//CREATE
const addList = async (req, res) => {
  console.log(req.body);
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
};

//DELETE

const deleteList = async (req, res) => {
    try {
    await List.findByIdAndDelete(req.params.id);
    res.status(201).json("The list has been delete...");
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    getLists,
    deleteList,
    addList
};
