"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Voucher extends Model {
    static associate(models) {}
  }

  Voucher.init(
    {
      voucher_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      voucher_code: {
        type: DataTypes.INTEGER,
      },
      discount_type: {
        type: DataTypes.ENUM("percentage", "fixed"),
        defaultValue: "percentage",
      },
      discount_value: {
        type: DataTypes.FLOAT,
      },
      expiry_date: {
        type: DataTypes.DATE,
      },
      issue_date: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.ENUM("used", "unused"),
        defaultValue: "unused",
      },

      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Voucher",
      timestamps: false,
    }
  );

  return Voucher;
};
