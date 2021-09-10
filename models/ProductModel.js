const connection = require('./connection');

const create = async (name, quantity) => connection()
  .then((db) => db.collection('products').insertOne({ name, quantity }))
  .then((result) => result.ops[0]);

const findName = async (name) => connection()
  .then((db) => db.collection('products').findOne({ name }))
  .then((result) => result);

module.exports = {
  create,
  findName,
};