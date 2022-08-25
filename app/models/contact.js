const { database } = require("../../config/db");
const { ObjectId } = require("mongodb");

class Contact {
  static collection = "contacts";

  static find = async (id) =>
    await database()
      .collection(this.collection)
      .findOne({ _id: ObjectId(id) });

  // TODO: validate properties
  // TODO: Better error handling
  static create = async (properties) => {
    const { insertedId } = await database()
      .collection(this.collection)
      .insertOne(properties);

    return await this.find(insertedId);
  };

  // TODO: Make an instance function
  // TODO: Validate properties
  // TODO: Better error handling
  static update = async (id, properties) => {
    const { value } = await database()
      .collection(this.collection)
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: properties },
        { returnDocument: "after" }
      );

    return value;
  };
  // TODO: Make an instance method
  // TODO: Better error Handling
  static destroy = async (id) =>
    await database()
      .collection(this.collection)
      .deleteOne({ _id: ObjectId(id) });
}

module.exports = Contact;
