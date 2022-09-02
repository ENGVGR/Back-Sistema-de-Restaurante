const Costumer = require("../controllers/costumer.controller");

module.exports = (costumer) => {
  costumer.post("/costumer/create", Costumer.create);

  costumer.get("/costumer/get-all", Costumer.findAll);

  costumer.get("/costumer/get/:id", Costumer.findOne);

  costumer.put("/costumer/update/:id", Costumer.update);

  costumer.delete("/costumer/delete/:id", Costumer.delete);
};
