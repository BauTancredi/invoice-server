const express = require("express");

const invoiceController = require("../controllers/invoiceController");
const auth = require("../middlewares/auth");

const router = express.Router();

// rout for get all invoices
router.get("/", auth, invoiceController.getAllInvoices);

module.exports = router;
