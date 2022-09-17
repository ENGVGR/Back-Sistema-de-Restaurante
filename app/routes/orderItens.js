const express = require("express");

const router = express.Router();

const orderItensController = require("../controllers/orderItens/orderItens.controller");

router.post("/create", orderItensController.createOrderItens);
router.get("/get", orderItensController.getAllOrderItens);
router.patch("/update/:id/:i_id", orderItensController.updateOrderItens);
router.delete("/delete/:id/:i_id", orderItensController.deleteOrderItens);

module.exports = router;
