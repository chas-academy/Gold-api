'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: [
        "private",
        "company"
      ]
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lat: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lon: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  Customer.associate = function (models) {
    Customer.belongsTo(models.user, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
      hooks: true
    });
    
    Customer.hasMany(models.service, {
      as: 'services',
      foreignKey: 'client_id',
      onDelete: 'cascade',
      hooks: true
    });
  };
  return Customer;
};