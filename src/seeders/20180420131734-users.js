'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        type: 'admin',
        name: 'Admin',
        email: 'admin.admin@email.com',
        tel: '0700123456',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'employee',
        name: 'Erica',
        email: 'emp.erica@email.com',
        tel: '',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'employee',
        name: 'Sven',
        email: 'emp.sven@email.com',
        tel: '0734154612',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'employee',
        name: 'Abdi',
        email: 'emp.abdi@email.com',
        tel: '0701233454',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'customer',
        name: 'Sven Svensson',
        email: 'cmr.sven@email.com',
        tel: '0737223452',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'customer',
        name: 'Bob Johnson',
        email: 'cmr.bob@email.com',
        tel: '0730987634',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'customer',
        name: 'Mäklarringen',
        email: 'cmr.maklarringen@email.com',
        tel: '08246812',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }, {
        type: 'customer',
        name: 'Hidden Company',
        email: 'cmr.company@email.com',
        tel: '08246843',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
