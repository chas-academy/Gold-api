'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        type: 'admin',
        name: 'Admin',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'admin@admin.com',
        tel: '08246812',
        address: 'Elektravägen 29',
        lat: '59.2950814',
        lon: '18.0088671' 
      }, {
        type: 'employee',
        name: 'Erica',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'erica@erica.com',
        tel: '0737223452',
        address: 'Drottninggatan 14, 2tr',
        lat: '59.3298085',
        lon: '18.0633878'
      }, {
        type: 'employee',
        name: 'Sven',
        pers_org_num: '9901019878',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'sven@sven.com',
        tel: '0737223452',
        address: 'Drottninggatan 14, 2tr',
        lat: '59.3298085',
        lon: '18.0633878' 
      }, {
        type: 'employee',
        name: 'Abdi',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'abdi@abdi.com',
        tel: '08246812',
        address: 'Elektravägen 29',
        lat: '59.2950814',
        lon: '18.0088671'
      }, {
        type: 'customer',
        name: 'Sven Svensson',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'sven@sven.com',
        tel: '08246812',
        address: 'Elektravägen 29',
        lat: '59.2950814',
        lon: '18.0088671' 
      }, {
        type: 'customer',
        name: 'Bob Johnson',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'bob@gmail.com',
        tel: '0730987634',
        address: 'Grinstagatan 49',
        lat: '59.3583324',
        lon: '17.8692312'
      }, {
        type: 'customer',
        name: 'Mäklarringen',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'info@maklarringen.com',
        tel: '08246812',
        address: 'Elektravägen 29',
        lat: '59.2950814',
        lon: '18.0088671'
      }, {
        type: 'customer',
        name: 'Hidden Company',
        password: '$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK', // qwerty
        email: 'company@name.com',
        tel: '08246843',
        address: 'Solursgränd 2',
        lat: '59.3627103',
        lon: '17.8738748'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
