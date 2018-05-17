'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('internal_orders', {
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
        allowNull: true,
        type: Sequelize.TEXT
      },
      lat: {
        allowNull: true,
        type: Sequelize.DOUBLE
      },
      lon: {
        allowNull: true,
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
    return queryInterface.dropTable('internal_orders');
  }
};