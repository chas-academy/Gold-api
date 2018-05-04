'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        id: 1,
        type: 'admin',
        name: 'Admin',
        pers_org_num: '9901019876',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 2,
        type: 'employee',
        name: 'Erica',
        pers_org_num: '9901019877',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 3,
        type: 'employee',
        name: 'Sven',
        pers_org_num: '9901019878',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 4,
        type: 'employee',
        name: 'Abdi',
        pers_org_num: '9901019879',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 5,
        type: 'customer',
        name: 'Sven Svensson',
        pers_org_num: '9901019870',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 6,
        type: 'customer',
        name: 'Bob Johnson',
        pers_org_num: '9901019875',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 7,
        type: 'customer',
        name: 'Mäklarringen',
        pers_org_num: '9901019874',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        id: 8,
        type: 'customer',
        name: 'Hidden Company',
        pers_org_num: '9901019873',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
