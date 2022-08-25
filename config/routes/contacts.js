var express = require("express");
const jsonResponse = require("../../app/middleware/jsonResponse");
const openCors = require("../../app/middleware/openCors");

const {
  show,
  create,
  destroy,
  update,
} = require("../../app/controllers/contacts");

const contacts = (router) => {
  router.use([express.json(), jsonResponse, openCors]);
  // show
  router.get("/:id", show);

  // create
  router.post("/", create);

  // update
  router.put("/:id", update);

  // destroy
  router.delete("/:id", destroy);

  return router;
};

module.exports = contacts;
