'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmployeeService = sequelize.define('employee_service', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    serviceId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  EmployeeService.associate = function (models) {};
  return EmployeeService;
};