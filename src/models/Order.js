'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('order', {
    service_id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    address: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image_path: DataTypes.STRING
  }, {});
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