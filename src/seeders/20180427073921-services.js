'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('services', [{
        id: 1,
        client_id: 5,
        order_type: 'order',
        con_pers: 'Sven',
        con_tel: '0737223452',
        datetime: '2018-05-23 16:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 2,
        client_id: 5,
        order_type: 'complaint',
        con_pers: 'Sven',
        con_tel: '0737223452',
        datetime: '2018-05-24 12:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 3,
        client_id: 6,
        order_type: 'order',
        con_pers: 'Bob',
        con_tel: '0730987634',
        datetime: '2018-05-23 14:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 4,
        client_id: 6,
        order_type: 'complaint',
        con_pers: 'Bob',
        con_tel: '0730987634',
        datetime: '2018-05-24 14:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 5,
        client_id: 7,
        order_type: 'order',
        con_pers: 'Jakob',
        con_tel: '0712391234',
        datetime: '2018-05-24 16:30:00.000 +02:00',
        status: 'new'
      }, {
        id: 6,
        client_id: 7,
        order_type: 'complaint',
        con_pers: 'Jakob',
        con_tel: '0712391234',
        datetime: '2018-05-24 19:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 7,
        client_id: 8,
        order_type: 'order',
        con_pers: 'Mindy',
        con_tel: '0721292314',
        datetime: '2018-05-25 10:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 8,
        client_id: 8,
        order_type: 'complaint',
        con_pers: 'Mindy',
        con_tel: '0721292314',
        datetime: '2018-05-25 16:00:00.000 +02:00',
        status: 'new'
      }, {
        id: 9,
        client_id: null,
        order_type: 'int_order',
        con_pers: null,
        con_tel: null,
        datetime: null,
        status: 'new'
      }, {
        id: 10,
        client_id: null,
        order_type: 'int_order',
        con_pers: null,
        con_tel: null,
        datetime: null,
        status: 'new'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};