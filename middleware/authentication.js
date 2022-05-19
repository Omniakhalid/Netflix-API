var jwt = require("jsonwebtoken");
const users = require("../modules/model/users.model");

module.exports = () => {
  return (req, res, next) => {
    // const token = req.headers["authorization"].split(" ")[1];
    const token = req.headers["authorization"];

    //console.log(token);
    if (!token || token === null || token === undefined) {
      res.json({ err: "invalid token" });
    }
    // verify a token symmetric
    jwt.verify(token, "shhhhh", async function (err, decoded) {
      if (err) {
        res.json({ err: "invalid signature" });
      } else {
        const user = await users.findOne({ _id: decoded.id });
        if (!user) {
          res.json({ err: "invalid user" });
        }
        req.user = user;
        next();
        console.log(user);
      }
    });
    //res.end();
  };
};
