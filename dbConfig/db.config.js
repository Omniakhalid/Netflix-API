const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect(
      "mongodb://localhost:27017/Netflix",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

module.exports = connection;
