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
    User.hasOne(models.customer, {
      foreignKey: "user_id"
    });

    User.belongsToMany(models.service, {
      as: "services",
      through: "employee_services"
    });
  };
  return User;
};