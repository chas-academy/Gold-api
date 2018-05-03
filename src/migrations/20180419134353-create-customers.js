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
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      tel: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};