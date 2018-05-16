'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "users",
          key: "id"
        }
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM("private", "company")
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lon: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};