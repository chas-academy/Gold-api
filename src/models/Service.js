'use strict';
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('service', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    client_id: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    order_type: {
      allowNull: false,
      values: ["order", "int_order", "complaint"],
      type: DataTypes.ENUM
    },
    con_pers: {
      allowNull: true,
      type: DataTypes.STRING
    },
    con_tel: {
      allowNull: true,
      type: DataTypes.STRING
    },
    datetime: {
      allowNull: true,
      type: DataTypes.DATE
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ["new", "assigned", "taken", "done"],
      defaultValue: "new"
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
      timestamps: true
    });
  Service.associate = function (models) {
    Service.belongsTo(models.customer, {
      foreignKey: "client_id",
      target: "user_id"
    });


    Service.hasOne(models.order, {
      foreignKey: "service_id",
      onDelete: 'CASCADE',
      hooks: true
    });

    Service.hasMany(models.complaint, {
      as: 'complaints',
      foreignKey: "service_id",
      onDelete: 'CASCADE',
      hooks: true
    });

    Service.hasMany(models.internal_order, {
      as: 'int_orders',
      foreignKey: "service_id",
      onDelete: 'CASCADE',
      hooks: true
    });

    Service.belongsToMany(models.user, {
      as: "employees",
      through: "employee_services",
      timestamps: false
    });
  };
  return Service;
};
