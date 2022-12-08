import express from "express";
import prisma from "../prisma";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Hello world");
});

app.get("/invoices", async (req, res) => {
  try {
    const invoices = await prisma.invoice.findMany();

    const userOfInvoice1 = await prisma.user.findUnique({
      where: {
        id: invoices[0].userId,
      },
    });

    console.log(userOfInvoice1);

    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});
