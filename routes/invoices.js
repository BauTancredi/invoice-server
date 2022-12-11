const express = require("express");

const invoiceController = require("../controllers/invoiceController");
const auth = require("../middlewares/auth");

const router = express.Router();

// rout for get all invoices
router.get("/", auth, invoiceController.getAllInvoicesFromUser);

// route for create invoice
router.post("/", auth, invoiceController.createInvoice);

// route for delete invoice
router.delete("/:id", auth, invoiceController.deleteInvoice);

// route for update invoice
router.put("/:id", auth, invoiceController.updateInvoice);

module.exports = router;
