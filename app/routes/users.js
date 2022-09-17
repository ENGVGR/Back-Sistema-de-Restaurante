const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users/users.controller");

router.post("/create", usersController.createUsers);
router.get("/get", usersController.getAllUsers);
router.patch("/update/:id", usersController.updateUsers);
router.delete("/delete/:id", usersController.deleteUsers);

module.exports = router;
