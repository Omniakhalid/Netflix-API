const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    image: { type: String },
    thumbnail: { type: String },
    video: { type: String },
    year: { type: Number },
    duration: { type: String, default: "2 hours 15 mins" },
    category: { type: String },
    _id: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = moviesSchema;
