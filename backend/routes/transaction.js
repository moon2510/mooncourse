var express = require("express");
const transactionControllers = require("../controllers/transactionController");
var router = express.Router();

const transactionController = require("../controllers/transactionController");
const auth = require("../middleware/auth");

router.post("/createTransaction", transactionController.createTransaction);

module.exports = router;
