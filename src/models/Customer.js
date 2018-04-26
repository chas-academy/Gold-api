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
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tel: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    timestamps: false
  });
  Customer.associate = function (models) {
    Customer.belongsTo(models.user, {
      foreignKey: 'user_id'
    });
    
    Customer.hasMany(models.service, {
      as: 'services',
      foreignKey: 'client_id'
    });
  };
  return Customer;
};