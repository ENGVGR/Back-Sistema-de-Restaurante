const express = require("express");

const router = express.Router();

const costumerController = require("../controllers/costumer/costumer.controller");

router.post("/create", costumerController.createCostumer);
router.get("/get", costumerController.getAllCostumers);
router.get("/get/:id", costumerController.getCostumer);
router.patch("/update/:id", costumerController.updateCostumer);
router.delete("/delete/:id", costumerController.deleteCostumer);

module.exports = router;
