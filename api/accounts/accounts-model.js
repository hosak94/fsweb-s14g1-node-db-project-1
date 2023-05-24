const db = require("../../data/db-config");

const getAll = () => {
  // KODLAR BURAYA
  return db("accounts"); //select * from accounts
};

const getById = (id) => {
  return db("accounts").where("id", id).first(); // select * from accounts where id = 1 limit1
};

const getByName = (name) => {
  return db("accounts").where("name", name).first();
};

const create = async (account) => {
  const inserted = await db("accounts").insert(account); // insert into accounts values(account)
  return getById(inserted[0]);
};

const updateById = async (id, account) => {
  await db("accounts").where("id", id).update(account); //update accounts set name=account.name, budget=account.budget where id=id
  return getById(id);
};

const deleteById = (id) => {
  return db("accounts").where("id", id).del(); //delete accounts where id=id
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName,
};
