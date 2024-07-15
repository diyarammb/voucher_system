const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// routes import
const userRoutes = require("./routes/userRoutes");
const voucherRoutes = require("./routes/voucherRoutes");
const app = express();
const PORT = 3292;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes Call
app.use("/api", userRoutes);
app.use("/api", voucherRoutes);
// routes end

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
