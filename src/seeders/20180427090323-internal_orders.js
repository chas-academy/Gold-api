'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('internal_orders', [{
      service_id: 11,
      address: 'Lergodsvägen',
      lat: 55.538510,
      lon: 13.092948,
      description: 'Intern ärende beskrivning.',
      image_path: null
    }, {
      service_id: 12,
      address: 'Lönngatan',
      lat: 55.583108,
      lon: 13.021872,
      description: 'Intern ärende beskrivning',
      image_path: null
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('internal_orders', null, {});
  }
};