'use strict';
module.exports = (sequelize, DataTypes) => {
  var IntOrder = sequelize.define('internal_order', {
    service_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
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
  IntOrder.associate = function (models) {
    IntOrder.belongsTo(models.service, {
      foreignKey: "service_id"
    });
  };
  return IntOrder;
};