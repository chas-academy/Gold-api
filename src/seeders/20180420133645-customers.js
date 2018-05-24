'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      user_id: '5',
      type: 'private',
      address: 'Regementsgatan 52',
      lat: 55.5982742,
      lon: 12.9826941
    }, {
      user_id: '6',
      type: 'private',
      address: 'Regementsgatan 94',
      lat: 55.5978482,
      lon: 12.9745356
    }, {
      user_id: '7',
      type: 'company',
      address: 'Sergels väg 11',
      lat: 55.602275,
      lon: 12.9736223
    }, {
      user_id: '8',
      type: 'company',
      address: 'Einar Hansens Esplanad 37',
      lat: 55.6134363,
      lon: 12.9773816
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
