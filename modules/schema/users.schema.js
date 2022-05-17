const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number },
    role: { type: String, default: "user" },
  },
  { timestamps }
); //when? and ay update 7sl emta

module.exports = usersSchema;
