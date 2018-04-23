'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      // return queryInterface.bulkInsert('users', [{
      //   type: 'admin',
      //   name: 'Teemo',
      //   pers_org_num: '197408198643',
      //   password: 'qwerty'
      // }, {
      //   type: 'employee',
      //   name: 'Erica',
      //   pers_org_num: '198902143123',
      //   password: 'qwerty'
      // }, {
      //   type: 'customer',
      //   name: 'Sven',
      //   pers_org_num: '196703129755',
      //   password: 'qwerty'
      // }, {
      //   type: 'customer',
      //   name: 'Mäklarringen',
      //   pers_org_num: '5563054708',
      //   password: 'qwerty'
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
