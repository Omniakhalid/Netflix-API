const mongoose = require("mongoose");

const listSchema = require("../schema/list.schema");
const listModel = mongoose.model("list", listSchema);
module.exports = listModel;
