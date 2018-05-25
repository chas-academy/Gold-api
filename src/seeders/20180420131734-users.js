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
      name: 'Erica Almgren',
      email: 'emp.erica@email.com',
      tel: '',
      password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
    }, {
      type: 'employee',
      name: 'Sven Asplund',
      email: 'emp.sven@email.com',
      tel: '0734154612',
      password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
    }, {
      type: 'employee',
      name: 'Abdi Alizade',
      email: 'emp.abdi@email.com',
      tel: '0701233454',
      password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
    }, {
      type: 'customer',
      name: 'Adam Berg',
      email: 'cmr.adam@email.com',
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
      name: 'Stena Fastigheter',
      email: 'cmr.stena@email.com',
      tel: '08246843',
      password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK' // qwerty
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
