const Costumer = require("../classes/costumer/costumer");

exports.create = (req, res) => {
  const costumer = new Costumer({
    name: req.body.name,
    table: req.body.table,
    status: req.body.status,
  });
  costumer
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro ao criar o usuário",
      });
    });
};
