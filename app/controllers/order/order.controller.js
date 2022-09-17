/* eslint-disable camelcase */
// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createOrder = (req, res) => {
  const { users_id, status, customers_id } = req.body;
  execSQLQuery(
    `insert into hamburgueria.orders(status, customers_id, users_id) values (${status}, ${customers_id}, ${users_id});`,
    res
  );
};

const getAllOrders = (req, res) => {
  execSQLQuery("SELECT * FROM hamburgueria.orders", res);
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  execSQLQuery(
    `UPDATE hamburgueria.orders SET hamburgueria.orders.status = ${status} WHERE hamburgueria.orders.id=${id}`,
    res
  );
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  execSQLQuery(`DELETE FROM hamburgueria.orders WHERE id=${id}`, res);
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
