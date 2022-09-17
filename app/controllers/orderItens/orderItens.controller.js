/* eslint-disable camelcase */
// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createOrderItens = (req, res) => {
  const { orders_id, items_id } = req.body;
  execSQLQuery(
    `insert into hamburgueria.orders_has_items(orders_id, items_id) values (${orders_id}, ${items_id});`,
    res
  );
};

const getAllOrderItens = (req, res) => {
  execSQLQuery("SELECT * FROM hamburgueria.orders_has_items", res);
};

const updateOrderItens = (req, res) => {
  const { id, i_id } = req.params;
  const { items_id } = req.body;
  execSQLQuery(
    `UPDATE hamburgueria.orders_has_items SET hamburgueria.orders_has_items.items_id = ${items_id} WHERE hamburgueria.orders_has_items.orders_id=${id} AND hamburgueria.orders_has_items.items_id=${i_id}`,
    res
  );
};

const deleteOrderItens = (req, res) => {
  const { id, i_id } = req.params;
  execSQLQuery(
    `DELETE FROM hamburgueria.orders_has_items WHERE hamburgueria.orders_has_items.orders_id=${id} AND hamburgueria.orders_has_items.items_id=${i_id}`,
    res
  );
};

module.exports = {
  createOrderItens,
  getAllOrderItens,
  updateOrderItens,
  deleteOrderItens,
};
