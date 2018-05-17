'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [{
        service_id: 1,
        address: 'Drottninggatan 14',
        lat: 59.3298085,
        lon: 18.0633878,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 2,
        address: 'Solursgränd 2',
        lat: 59.3627103,
        lon: 17.8738748,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 3,
        address: 'Elektravägen 29',
        lat: 59.2950814,
        lon: 18.0088671,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 4,
        address: 'Grinstagatan 49',
        lat: 59.3583324,
        lon: 17.8692312,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 5,
        address: 'Elektravägen 29',
        lat: 59.2950814,
        lon: 18.0088671,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 6,
        address: 'Drottninggatan 14',
        lat: 59.3298085,
        lon: 18.0633878,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }, {
        service_id: 7,
        address: 'Solursgränd 2',
        lat: 59.3627103,
        lon: 17.8738748,
        description: 'Description of a general order. Do that, that and some of this.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
}
};