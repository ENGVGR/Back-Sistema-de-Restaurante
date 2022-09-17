const express = require("express");

const router = express.Router();

const orderController = require("../controllers/order/order.controller");

router.post("/create", orderController.createOrder);
router.get("/get", orderController.getAllOrders);
router.patch("/update/:id", orderController.updateOrder);
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
