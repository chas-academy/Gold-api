'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmployeeService = sequelize.define('employee_service', {
    employee_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {});
  EmployeeService.associate = function (models) {
    EmployeeService.belongsTo(models.user, {
      foreignKey: 'employee_id'
    });
    EmployeeService.belongsTo(models.service, {
      foreignKey: 'service_id'
    });
  };
  return EmployeeService;
};