const { Voucher } = require("../models");

// Create a new voucher
exports.createVoucher = async (req, res) => {
  try {
    const newVoucher = await Voucher.create(req.body);
    res.status(201).json(newVoucher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all vouchers
exports.getAllVouchers = async (req, res) => {
  try {
    const vouchers = await Voucher.findAll();
    res.status(200).json(vouchers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a voucher by ID
exports.getVoucherById = async (req, res) => {
  try {
    const voucher = await Voucher.findByPk(req.params.id);
    if (voucher) {
      res.status(200).json(voucher);
    } else {
      res.status(404).json({ error: "Voucher not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a voucher
exports.updateVoucher = async (req, res) => {
  try {
    const [updated] = await Voucher.update(req.body, {
      where: { voucher_id: req.params.id },
    });
    if (updated) {
      const updatedVoucher = await Voucher.findByPk(req.params.id);
      res.status(200).json(updatedVoucher);
    } else {
      res.status(404).json({ error: "Voucher not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a voucher
exports.deleteVoucher = async (req, res) => {
  try {
    const deleted = await Voucher.destroy({
      where: { voucher_id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: "Voucher deleted" });
    } else {
      res.status(404).json({ error: "Voucher not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
