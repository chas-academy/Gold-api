'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        id: 1,
        type: 'admin',
        name: 'Admin',
        pers_org_num: '199901019876',
        password: 'qwerty'
      }, {
        id: 2,
        type: 'employee',
        name: 'Erica',
        pers_org_num: '199901019877',
        password: 'qwerty'
      }, {
        id: 3,
        type: 'employee',
        name: 'Sven',
        pers_org_num: '199901019878',
        password: 'qwerty'
      }, {
        id: 4,
        type: 'employee',
        name: 'Abdi',
        pers_org_num: '199901019879',
        password: 'qwerty'
      }, {
        id: 5,
        type: 'customer',
        name: 'Sven Svensson',
        pers_org_num: '199901019870',
        password: 'qwerty'
      }, {
        id: 6,
        type: 'customer',
        name: 'Bob Johnson',
        pers_org_num: '199901019875',
        password: 'qwerty'
      }, {
        id: 7,
        type: 'customer',
        name: 'Mäklarringen',
        pers_org_num: '199901019874',
        password: 'qwerty'
      }, {
        id: 8,
        type: 'customer',
        name: 'Hidden Company',
        pers_org_num: '199901019873',
        password: 'qwerty'
      }], {});
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
