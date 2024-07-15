const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/voucherController");

router.post("/vouchers", voucherController.createVoucher);
router.get("/vouchers", voucherController.getAllVouchers);
router.get("/vouchers/:id", voucherController.getVoucherById);
router.put("/vouchers/:id", voucherController.updateVoucher);
router.delete("/vouchers/:id", voucherController.deleteVoucher);

module.exports = router;
