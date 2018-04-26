'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('order', {
    service_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image_path: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  Order.associate = function(models) {
    Order.belongsTo(models.service, {
      foreignKey: "service_id"
    });

    Order.hasMany(models.complaint, {
      foreignKey: "order_id"
    });
  };
  return Order;
};