const prisma = require("../prisma");

exports.getAllInvoicesFromUser = async (req, res) => {
  console.log(req.body)
  try {
    const invoices = await prisma.invoice.findMany({
      where: {
        userId: req.body.user.id,
      },
      include: {
        Items: true,
      },
    });

    res.json(invoices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await prisma.invoice.create({
      data: {
        ...req.body,
        // userId: req.body.user,
        Items: {
          create: req.body.Items
        }
      },
    });

    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errowwwr");
  }
};

exports.deleteInvoice = async (req, res) => {
  try {
    const invoice = await prisma.invoice.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

exports.updateInvoice = async (req, res) => {
  try {
    const invoice = await prisma.invoice.update({
      where: {
        id: req.params.id,
      },
      data: {
        ...req.body,
      },
    });

    res.json(invoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}