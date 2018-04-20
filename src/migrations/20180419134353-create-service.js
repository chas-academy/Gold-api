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
        type: Sequelize.INTEGER,
        references: {
          model: "customers",
          key: "user_id"
        }
      },
      order_type: {
        allowNull: false,
        type: Sequelize.ENUM("order","int_order","complaint")
      },
      con_pers: {
        type: Sequelize.STRING
      },
      con_tel: {
        type: Sequelize.STRING
      },
      datetime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("new","taken","done")
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('services');
  }
};