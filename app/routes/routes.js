const C = require("../controllers/costumer.controller");

module.exports = (costumer) => {
  costumer.post("/costumer/create", C.create);
};
