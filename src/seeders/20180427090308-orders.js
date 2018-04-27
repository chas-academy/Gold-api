'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [{
        service_id: 1,
        address: 'Drottninggatan 14, 2tr',
        description: 'Description lorem ipsum summon satan our lord will save us all.',
        image_path: null
      }, {
        service_id: 3,
        address: 'Grinstagatan 49',
        description: 'Description lorem ipsum summon satan our lord will save us all.',
        image_path: null
      }, {
        service_id: 5,
        address: 'Elektravägen 29',
        description: 'Description lorem ipsum summon satan our lord will save us all.',
        image_path: null
      }, {
        service_id: 7,
        address: 'Solursgränd 2',
        description: 'Description lorem ipsum summon satan our lord will save us all.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
}
};