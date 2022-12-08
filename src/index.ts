import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../prisma";

require("dotenv").config();

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

// route for signup
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

// route for login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials!" });
    }

    // const SECRET = process.env.JWT_SECRET;

    // return jwt token
    const token = jwt.sign({ email: user.email, id: user }, "SECRET", {
      expiresIn: "1h",
    });

    res.status(200).json({ user: { id: user.id, name: user.name }, token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});
