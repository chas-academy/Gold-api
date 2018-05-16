'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('internal_orders', [{
        service_id: 11,
        description: 'Buy plz some of those and more of these.',
        image_path: null
      }, {
        service_id: 12,
        description: 'Buy plz some of those and more of these.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('internal_orders', null, {});
}
};