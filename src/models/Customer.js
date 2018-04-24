'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        "private",
        "company"
      ]
    },
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Customer.associate = function (models) {
    Customer.belongsTo(models.user, {
      foreignKey: 'user_id'
    });
    
    Customer.hasMany(models.service, {
      foreignKey: 'client_id'
    });
  };
  return Customer;
};