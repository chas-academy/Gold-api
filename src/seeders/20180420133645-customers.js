'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('customers', [{
    //   user_id: '3',
    //   type: 'private',
    //   email: 'sven.svensson@gmail.com',
    //   tel: '0737223452',
    //   address: 'Drottninggatan 14, 2tr'
    // }, {
    //   user_id: '4',
    //   type: 'company',
    //   email: 'info@maklarringen.com',
    //   tel: '08246812',
    //   address: 'Grinstagatan 49'
    // }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
