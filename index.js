const express = require("express");
const timeout = require("connect-timeout");
const swaggerUi = require("swagger-ui-express");

const swaggerDoc = require("./swagger/contacts.json");
const appConfig = require("./config/application");
const { initDB } = require("./config/db");

const app = express();

app.use(timeout(120000));

// Routes
const contactsRoutes = require("./config/routes/contacts");
app.use("/contacts", contactsRoutes(express.Router()));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

initDB().then(() => {
  app.listen(appConfig.port, () => {
    console.log(`Application started on ${appConfig.port}`);
  });
});
