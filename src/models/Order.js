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
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.Service, {
          foreignKey: "service_id"
        });
      }
    }
  });
  return Order;
};