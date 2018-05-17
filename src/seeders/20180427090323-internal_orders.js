'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('internal_orders', [{
        service_id: 11,
        address: 'Konstigt gatan 12',
        lat: '60.3298085',
        lon: '15.0633878',
        description: 'Buy plz some of those and more of these.',
        image_path: null
      }, {
        service_id: 12,
        address: 'Konstigt gatan 12',
        lat: '58.3298085',
        lon: '17.0633878',
        description: 'Buy plz some of those and more of these.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('internal_orders', null, {});
}
};