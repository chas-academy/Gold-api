'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [{
      user_id: '5',
      type: 'private'
    }, {
      user_id: '6',
      type: 'private'
    }, {
      user_id: '7',
      type: 'company'
    }, {
      user_id: '8',
      type: 'company'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
