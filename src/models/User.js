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
      type: DataTypes.STRING,
      validate: {
        isAlpha: true
      }
    },
    pers_org_num: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
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
      timestamps: false
    });
  };
  return User;
};