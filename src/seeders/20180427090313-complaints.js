'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('complaints', [{
        service_id: 2,
        order_id: 1,
        description: 'Description lorem ipsum satan did not come to save us. We grief.',
        image_path: null
      }, {
        service_id: 4,
        order_id: 3,
        description: 'Description lorem ipsum satan did not come to save us. We grief.',
        image_path: null
      }, {
        service_id: 6,
        order_id: 5,
        description: 'Description lorem ipsum satan did not come to save us. We grief.',
        image_path: null
      }, {
        service_id: 8,
        order_id: 7,
        description: 'Description lorem ipsum satan did not come to save us. We grief.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('complaints', null, {});
}
};