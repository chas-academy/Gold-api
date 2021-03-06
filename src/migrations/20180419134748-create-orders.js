'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      service_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "services",
          key: "id"
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lat: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      lon: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image_path: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};