'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "users",
          key: "id"
        }
      },
      type: {
        type: Sequelize.ENUM("private", "company")
      },
      email: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING(20)
      },
      address: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};