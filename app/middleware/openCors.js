const cors = require("cors");

const openCors = (req, res, next) => {
  const openCors = { origin: "*" };

  console.log("Setting open CORS");

  return cors(openCors)(req, res, next);
};

module.exports = openCors;
