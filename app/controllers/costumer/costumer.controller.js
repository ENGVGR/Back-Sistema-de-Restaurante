// eslint-disable-next-line import/no-import-module-exports
import execSQLQuery from "../../sqlQuerry";

const createCostumer = (req, res) => {
  const { table } = req.body;
  execSQLQuery(`insert into customers(customers.table) values(${table});`, res);
};

const getAllCostumers = (req, res) => {
  execSQLQuery("SELECT * FROM customers", res);
};

const getCostumer = (req, res) => {
  const { id } = req.params;
  let filter = "";
  if (id) filter = ` WHERE customers.id=${id}`;
  execSQLQuery(`SELECT * FROM customers${filter}`, res);
};

const getAllPayments = (req, res) => {
  execSQLQuery(
    `SELECT hamburgueria.customers.table as mesa, sum(hamburgueria.items.price) as total_a_pagar
  FROM hamburgueria.orders
  INNER JOIN hamburgueria.customers
  ON hamburgueria.orders.customers_id = hamburgueria.customers.id
  inner join hamburgueria.orders_has_items
  on hamburgueria.orders.id = hamburgueria.orders_has_items.orders_id
  inner join hamburgueria.items
  on hamburgueria.items.id = hamburgueria.orders_has_items.items_id
  group by mesa;`,
    res
  );
};

const getAllCostumersOrders = (req, res) => {
  execSQLQuery(
    `SELECT hamburgueria.customers.id as pessoa, hamburgueria.customers.table as mesa, hamburgueria.items.title as pedido, hamburgueria.orders.id as order_id
  FROM hamburgueria.orders
  INNER JOIN hamburgueria.customers
  ON hamburgueria.orders.customers_id = hamburgueria.customers.id
  inner join hamburgueria.orders_has_items
  on hamburgueria.orders.id = hamburgueria.orders_has_items.orders_id
  inner join hamburgueria.items
  on hamburgueria.items.id = hamburgueria.orders_has_items.items_id
  order by mesa;`,
    res
  );
};

const updateCostumer = (req, res) => {
  const { id } = req.params;
  const { table } = req.body;
  execSQLQuery(
    `UPDATE customers SET customers.table = ${table} WHERE customers.ID=${id}`,
    res
  );
};

const deleteCostumer = (req, res) => {
  const { id } = req.params;
  execSQLQuery(`DELETE FROM customers WHERE id=${id}`, res);
};

module.exports = {
  createCostumer,
  getAllCostumers,
  getCostumer,
  getAllPayments,
  getAllCostumersOrders,
  updateCostumer,
  deleteCostumer,
};
