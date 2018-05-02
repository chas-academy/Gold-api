'use strict';
module.exports = (sequelize, DataTypes) => {
  var Complaint = sequelize.define('complaint', {
    service_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    },
    order_id: {
      allowNull: false,
      type: DataTypes.INTEGER
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
    Complaint.associate = function(models) {
      Complaint.belongsTo(models.service, {
        foreignKey: "service_id",
        onDelete: 'cascade',
        hooks: true
      });
      
      Complaint.belongsTo(models.order, {
        foreignKey: "order_id",
        target: "service_id"
      });
    };
  return Complaint;
};