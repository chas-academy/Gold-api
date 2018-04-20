'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('users', {
    id: DataTypes.INTEGER,
    type: DataTypes.ENUM,
    name: DataTypes.STRING,
    pers_org_num: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = function (models) {
  };
  return User;
};