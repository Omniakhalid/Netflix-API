const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect(
      "mongodb+srv://Nada:nada123@cluster0.yg1zg.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

module.exports = connection;
