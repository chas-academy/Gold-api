'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: [
        "private",
        "company"
      ]
    }, 
    timestamps: false
  });

  Customer.associate = function (models) {
    Customer.belongsTo(models.user, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
      hooks: true
    });
    
    Customer.hasMany(models.service, {
      as: 'services',
      foreignKey: 'client_id',
      onDelete: 'cascade',
      hooks: true
    });

    Customer.belongsToMany(models.user, {
      as: 'customer_employees',
      through: "employees",
      onDelete: 'cascade',
      hooks: true
    });

  };
  return Customer;
};