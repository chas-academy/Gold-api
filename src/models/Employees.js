'use strict';
module.exports = (sequelize, DataTypes) => {
  var CustomerEmployee = sequelize.define('customer_employee', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    }, 
    timestamps: false
  });

  CustomerEmployee.associate = function (models) {
    CustomerEmployee.belongsTo(models.customer, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
      hooks: true
    });
    
    CustomerEmployee.hasMany(models.service, {
      as: 'services',
      foreignKey: 'client_id',
      onDelete: 'cascade',
      hooks: true
    });

  };
  return CustomerEmployee;
};