/* eslint-disable camelcase */
// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createItem = (req, res) => {
  const { menus_id, users_id, price } = req.body;
  const title = req.body.title.substring(0, 255);
  const description = req.body.description.substring(0, 1000);
  execSQLQuery(
    `insert into items(title, description, price, menus_id, users_id) values ('${title}', '${description}', ${price}, ${menus_id}, ${users_id});`,
    res
  );
};

const getAllItems = (req, res) => {
  execSQLQuery("SELECT * FROM items", res);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  execSQLQuery(
    `UPDATE items SET items.price = ${price} WHERE items.id=${id}`,
    res
  );
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  execSQLQuery(`DELETE FROM items WHERE id=${id}`, res);
};

module.exports = {
  createItem,
  getAllItems,
  updateItem,
  deleteItem,
};
