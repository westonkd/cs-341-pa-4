require("dotenv").config();
const { MongoClient } = require("mongodb");

let _client;

const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const uri = `mongodb+srv://westonkd:${password}@cluster0.vnxduoo.mongodb.net/?retryWrites=true&w=majority`;

const initDB = async () => {
  if (_client) return _client;

  console.log("Connecting to DB");

  try {
    _client = await MongoClient.connect(uri);
    console.log("DB connection established");
  } catch (error) {
    throw Error(`DB Connection error: ${error}`);
  }
};

const database = () => {
  if (!_client) throw Error("No DB connection initialize. Please call init()");

  return _client.db(dbName);
};

module.exports = {
  initDB,
  database,
};
