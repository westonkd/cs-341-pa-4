const swaggerAutogen = require("swagger-autogen")();
const appConfig = require("../config/application");

console.log(appConfig.host);

const doc = {
  info: {
    title: "Weston's Contacts API",
    description: "An open API for managing contacts",
  },
  host: appConfig.host,
  schemes: ["https"],
};

const outputFile = "./swagger/contacts.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
