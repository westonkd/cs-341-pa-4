require("dotenv").config();

const host = () => {
  return process.env.NODE_ENV != "production"
    ? `localhost:${process.env.PORT}`
    : `${process.env.HEROKU_APP_NAME}.herokuapp.com`;
};

module.exports = {
  port: process.env.PORT,
  timeout: process.env.TIMEOUT_MS,
  host: host(),
};
