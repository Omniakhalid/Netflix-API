module.exports = (roles) => {
  return (req, res, next) => {
    console.log(roles);
    if (roles.includes(req.user.role)) {
      res.json({ authorization: "You are authorized" });
      next();
    } else {
      console.log(req.user.role);
      res.json({ authorization: "You aren't authorized" });
    }
  };
};
