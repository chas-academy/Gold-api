'use strict';
module.exports = (sequelize, DataTypes) => {
  var Complaint = sequelize.define('complaint', {
    service_id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image_path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Complaint.belongsTo(models.Service, {
          foreignKey: "service_id"
        });
        
        Complaint.belongsTo(models.Order, {
          foreignKey: "order_id",
          target: "service_id"
        });
      }
    }
  });
  return Complaint;
};