const mongoose = require("mongoose");

const listsSchema =new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content:{type:Array,ref: 'movie'}
  },
  { timestamps: true }
);

module.exports = listsSchema