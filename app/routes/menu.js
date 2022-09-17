const express = require("express");

const router = express.Router();

const menuController = require("../controllers/menu/menu.controller");

router.post("/create", menuController.createMenu);
router.get("/get", menuController.getAllMenu);
router.patch("/update/title/:id", menuController.updateTitleMenu);
router.patch("/update/description/:id", menuController.updateDescriptionMenu);
router.delete("/delete/:id", menuController.deleteMenu);

module.exports = router;
