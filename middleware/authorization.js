module.exports = (roles) => {
  return (req, res) => {
    if (roles.includes([req.user.role])) {
      console.log(req.user.role);
      res.json({ authorization: "You are authorized" });
      console.log("You are authorized");
    } else {
      res.json({ authorization: "You aren't authorized" });
      console.log("You aren't authorized");
    }
  };
};
