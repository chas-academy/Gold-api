'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      user_id: '5',
      type: 'private',
      address: 'Drottninggatan 14',
      lat: 59.3298085,
      lon: 18.0633878
    }, {
      user_id: '6',
      type: 'private',
      address: 'Grinstagatan 49',
      lat: 59.3583324,
      lon: 17.8692312
    }, {
      user_id: '7',
      type: 'company',
      address: 'Elektravägen 29',
      lat: 59.2950814,
      lon: 18.0088671
    }, {
      user_id: '8',
      type: 'company',
      address: 'Solursgränd 2',
      lat: 59.3627103,
      lon: 17.8738748
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
