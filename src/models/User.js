'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM,
      values: [
        "admin",
        "employee",
        "customer"
      ]
    },
    name: DataTypes.STRING,
    pers_org_num: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function (models) {
  };
  return User;
};