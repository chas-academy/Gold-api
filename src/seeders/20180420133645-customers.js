'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      user_id: '5',
      type: 'private',
      email: 'sven.svensson@gmail.com',
      tel: '0737223452',
      address: 'Drottninggatan 14, 2tr',
      lat: '59.3298085',
      lon: '18.0633878'
    }, {
      user_id: '6',
      type: 'private',
      email: 'bob@gmail.com',
      tel: '0730987634',
      address: 'Grinstagatan 49',
      lat: '59.3583324',
      lon: '17.8692312'
    }, {
      user_id: '7',
      type: 'company',
      email: 'info@maklarringen.com',
      tel: '08246812',
      address: 'Elektravägen 29',
      lat: '59.2950814',
      lon: '18.0088671'
    }, {
      user_id: '8',
      type: 'company',
      email: 'company@name.com',
      tel: '08246843',
      address: 'Solursgränd 2',
      lat: '59.3627103',
      lon: '17.8738748'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
