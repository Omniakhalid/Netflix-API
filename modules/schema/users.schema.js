const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    phone: { type: Number },
    role: { type: String, default: "user" },
    _id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
  },
  { timestamps: true },

);

module.exports = usersSchema;
