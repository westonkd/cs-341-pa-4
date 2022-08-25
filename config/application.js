require("dotenv").config();

const host = () => {
  return process.env.NODE_ENV != "production"
    ? `localhost:${process.env.PORT}`
    : `cse-341-westonkd.herokuapp.com`;
};

module.exports = {
  port: process.env.PORT,
  timeout: process.env.TIMEOUT_MS,
  host: host(),
};
