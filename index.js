const express = require("express");

require("dotenv").config();

const app = express();
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use("/api/users", require("./routes/users"));
