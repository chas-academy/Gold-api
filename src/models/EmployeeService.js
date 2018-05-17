'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmployeeService = sequelize.define('employee_service', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    serviceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false
  });
  EmployeeService.associate = function (models) {};
  return EmployeeService;
};