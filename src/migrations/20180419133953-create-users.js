'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM("admin", "employee", "customer")
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
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
        type: Sequelize.STRING
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};