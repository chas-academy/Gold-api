'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "customers",
          key: "user_id"
        }
      },
      order_type: {
        allowNull: false,
        type: Sequelize.ENUM("order", "int_order", "complaint")
      },
      con_pers: {
        allowNull: true,
        type: Sequelize.STRING
      },
      con_tel: {
        allowNull: true,
        type: Sequelize.STRING
      },
      datetime: {
        allowNull: true,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("new", "assigned", "taken", "done"),
        defaultValue: "new"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('services');
  }
};