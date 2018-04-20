'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customers', {
    user_id: DataTypes.INTEGER,
    type: DataTypes.ENUM,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Customer.associate = function (models) {
    Customer.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Customer;
};