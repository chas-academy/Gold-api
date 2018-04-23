'use strict';
module.exports = (sequelize, DataTypes) => {
  var Service = sequelize.define('service', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    client_id: DataTypes.INTEGER,
    order_type: {
      values: ["order","int_order","complaint"],
      type: DataTypes.ENUM
    },
    con_pers: DataTypes.STRING,
    con_tel: DataTypes.STRING,
    datetime: DataTypes.DATE,
    status: {
      values: ["new","taken","done"],
      type: DataTypes.ENUM
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
          Service.belongsTo(models.Customer, {
            foreignKey: "client_id",
            target: "user_id"
          });
      }
    }
  });
  return Service;
};
