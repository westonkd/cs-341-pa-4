require("dotenv").config();

const host = () => {
  return process.env.HEROKU_APP_NAME
    ? `${process.env.HEROKU_APP_NAME}.herokuapp.com`
    : `localhost:${process.env.PORT}`;
};

module.exports = {
  port: process.env.PORT,
  timeout: process.env.TIMEOUT_MS,
  host: host(),
};
