'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: [
        "admin",
        "employee",
        "customer"
      ]
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }, 
    tel: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lat: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lon: {
      allowNull: false,
      type: DataTypes.STRING
    },
    timestamps: false
  });
  User.associate = function (models) {
    User.hasOne(models.customer, {
      foreignKey: "user_id",
      onDelete: 'cascade',
      hooks: true
    });

    User.belongsToMany(models.service, {
      as: "services",
      through: "employee_services",
    });
  };
  return User;
};
