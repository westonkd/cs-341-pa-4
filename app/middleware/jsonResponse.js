const jsonResponse = (req, res, next) => {
  res.set("Content-Type", "application/json");

  console.log("Setting content type to application/json");

  next();
};

module.exports = jsonResponse;
