const mongoose = require("mongoose");

const connection = () => {
  return mongoose
    .connect(
      "mongodb+srv://netflix:netflix@cluster0.3jq3e.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connected"))
    .catch((error) => console.log(error));
};

module.exports = connection;
