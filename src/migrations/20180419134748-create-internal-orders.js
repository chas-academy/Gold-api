'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('internal_orders', {
      service_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id"
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image_path: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('internal_orders');
  }
};