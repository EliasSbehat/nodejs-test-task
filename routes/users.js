const express = require("express");

const router = express.Router();
const userController = require("../controller/usersController");

//APIs
router.get("/get", userController.get);
router.get("/getById", userController.getById);
router.post("/add", userController.add);
router.post("/update", userController.update);
router.delete("/delete", userController.delete);

module.exports = router;
