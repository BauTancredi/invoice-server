const prisma = require("../prisma");

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await prisma.invoice.findMany({
      // include: {
      //   user: true,
      // },
    });
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
