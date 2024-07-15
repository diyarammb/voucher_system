const { User } = require("../models");
const bcrypt = require("bcryptjs");

// Helper function to generate error messages
const getErrorMessage = (code) => {
  const errorMessages = {
    101: "Error hashing password",
    111: "Error during login process",
    // Add other error messages as needed
  };
  return errorMessages[code] || "Unknown error";
};
// Password hashing method
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw new Error(getErrorMessage(101));
  }
};
// Registration function
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      is_active: 1,
    });

    return res.status(201).json({ message: "User Added", data: user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Login function
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password not matched" });
    }

    return res.status(200).json({
      message: "Login successfully",
      user: user.email,
    });
  } catch (error) {
    return res.status(400).json({ error: getErrorMessage(111) });
  }
};

module.exports = {
  register,
  login,
};
