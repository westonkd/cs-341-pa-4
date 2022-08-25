const Contact = require("../models/contact");

module.exports.show = async (req, res) => {
  const contact = await Contact.find(req.params.id);

  res.status(200);
  res.json(contact);
};

module.exports.create = async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201);
  res.json(contact);
};

module.exports.update = async (req, res) => {
  const contact = await Contact.update(req.params.id, req.body);

  res.status(200);
  res.json(contact);
};

module.exports.destroy = async (req, res) => {
  await Contact.destroy(req.params.id);

  res.status(204).send();
};
