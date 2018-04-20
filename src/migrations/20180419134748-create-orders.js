'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      service_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('orders');
  }
};