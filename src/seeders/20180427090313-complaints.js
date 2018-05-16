'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('complaints', [{
        service_id: 8,
        order_id: 6,
        description: 'Description of a general complaint. Something was done wrong.',
        image_path: null
      }, {
        service_id: 9,
        order_id: 7,
        description: 'Description of a general complaint. Something was done wrong.',
        image_path: null
      }, {
        service_id: 10,
        order_id: 5,
        description: 'Description of a general complaint. Something was done wrong.',
        image_path: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('complaints', null, {});
}
};