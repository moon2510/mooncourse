var express = require("express");
const transactionControllers = require("../controllers/transactionController");
var router = express.Router();

const transactionController = require("../controllers/transactionController");
const auth = require("../middleware/auth");
const CheckoutController = require("../controllers/checkoutController");

router.post("/createTransaction", CheckoutController.createTracsaction);

module.exports = router;
