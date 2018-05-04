'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [{
        service_id: 1,
        address: 'Drottninggatan 14, 2tr',
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 3,
        address: 'Grinstagatan 49',
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 5,
        address: 'Elektravägen 29',
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 7,
        address: 'Solursgränd 2',
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
}
};