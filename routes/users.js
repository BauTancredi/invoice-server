const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/userController");

const router = express.Router();

// route for signup
router.post(
  "/",
  [
    check("name", "The name is mandatory").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.signup
);

// route for login
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ error: "User not found!" });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ error: "Invalid credentials!" });
//     }

//     // const SECRET = process.env.JWT_SECRET;

//     // return jwt token
//     const token = jwt.sign({ email: user.email, id: user }, "SECRET", {
//       expiresIn: "1h",
//     });

//     res.status(200).json({ user: { id: user.id, name: user.name }, token });
//   } catch (error) {
//     res.status(500).json({ error: "Something went wrong!" });
//   }
// });

module.exports = router;
