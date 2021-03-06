'use strict';
module.exports = (sequelize, DataTypes) => {
  var IntOrder = sequelize.define('internal_order', {
    service_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    },
    address: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    lat: {
      allowNull: true,
      type: DataTypes.DOUBLE
    },
    lon: {
      allowNull: true,
      type: DataTypes.DOUBLE
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image_path: {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  }, {
      timestamps: false
    });
  IntOrder.associate = function (models) {
    IntOrder.belongsTo(models.service, {
      foreignKey: "service_id",
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return IntOrder;
};