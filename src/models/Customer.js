'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    user_id: DataTypes.INTEGER,
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
    Customer.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Customer;
};