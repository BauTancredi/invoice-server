const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use("/api/users", require("./routes/users"));
app.use("/api/invoices", require("./routes/invoices"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
