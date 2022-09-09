// eslint-disable-next-line import/no-import-module-exports
import Costumer from "../../classes/costumer/costumer";

let costumersDB = [];
let newId = 1;

const createCostumer = (req, res) => {
  const costumer = new Costumer({
    id: newId,
    name: req.body.name,
    table: req.body.table,
    status: req.body.status,
  });
  costumersDB.push(costumer.id);
  newId += 1;
  res.send("Cliente Criado!");
};

const getAllCostumers = (req, res) => {
  res.send(costumersDB);
};

const getCostumer = (req, res) => {
  const { id } = req.params;
  const result = costumersDB.filter(
    (costumer) => costumer.id.toString() === id
  );
  res.send(result);
};

const updateCostumer = (req, res) => {
  const { id } = req.params;
  const { name, table, status } = req.body;

  const costumer = costumersDB.filter((ctmer) => ctmer.id.toString() === id);
  costumersDB = costumersDB.filter((ctmer) => ctmer.id.toString() !== id);

  if (name) {
    costumer[0].name = name;
  }
  if (table) {
    costumer[0].table = table;
  }
  if (status) {
    costumer[0].status = status;
  }

  costumersDB.push(costumer[0]);
  res.send("Alterações feitas!");
};

const deleteCostumer = (req, res) => {
  const { id } = req.params;
  costumersDB = costumersDB.filter((ctmer) => ctmer.id.toString() !== id);

  res.send("Cliente excluido!");
};

module.exports = {
  createCostumer,
  getAllCostumers,
  getCostumer,
  updateCostumer,
  deleteCostumer,
};
