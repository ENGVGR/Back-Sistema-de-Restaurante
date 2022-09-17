const express = require("express");

const router = express.Router();

const ItemController = require("../controllers/items/items.controller");

router.post("/create", ItemController.createItem);
router.get("/get", ItemController.getAllItems);
router.patch("/update/:id", ItemController.updateItem);
router.delete("/delete/:id", ItemController.deleteItem);

module.exports = router;
