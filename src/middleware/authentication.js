const jwtProvider = require("../config/jwtProvider");
const authController = require("../controllers/authController");

const authenticate = async (req, res, next) => {
  // Bearer token
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).json({ error: "token not found..." });
    }
    const userId = jwtProvider.getUSERIDFromToken(token);
    const user = await authController.findUserById(userId);

    req.user = user;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};

module.exports = authenticate;
