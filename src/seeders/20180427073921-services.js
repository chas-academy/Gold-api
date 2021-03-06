'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('services', [{
      client_id: 5,
      order_type: 'order',
      con_pers: 'Adam Berg',
      con_tel: '0737223452',
      datetime: '2018-05-23 16:00:00.000 +02:00',
      status: 'new'
    }, {
      client_id: 8,
      order_type: 'order',
      company_name: 'Stena Fastigheter',
      con_pers: 'Robert',
      con_tel: '0721255555',
      datetime: '2018-05-25 16:00:00.000 +02:00',
      status: 'new'
    }, {
      client_id: 7,
      order_type: 'order',
      company_name: 'Mäklarringen',
      con_pers: 'Tyrone',
      con_tel: '0721292314',
      datetime: '2018-05-25 16:00:00.000 +02:00',
      status: 'assigned'
    }, {
      client_id: 6,
      order_type: 'order',
      con_pers: 'Bob',
      con_tel: '0730987634',
      datetime: '2018-05-23 14:00:00.000 +02:00',
      status: 'assigned'
    }, {
      client_id: 7,
      order_type: 'order',
      company_name: 'Mäklarringen',
      con_pers: 'Jakob',
      con_tel: '0712391234',
      datetime: '2018-05-24 16:30:00.000 +02:00',
      status: 'done'
    }, {
      client_id: 5,
      order_type: 'order',
      con_pers: 'Adam',
      con_tel: '0737223452',
      datetime: '2018-05-25 10:00:00.000 +02:00',
      status: 'done'
    }, {
      client_id: 8,
      order_type: 'order',
      company_name: 'Stena Fastigheter',
      con_pers: 'Mindy',
      con_tel: '0721292314',
      datetime: '2018-05-25 10:00:00.000 +02:00',
      status: 'done'
    }, {
      client_id: 5,
      order_type: 'complaint',
      con_pers: 'Adam Berg',
      con_tel: '0737223452',
      datetime: '2018-05-24 12:00:00.000 +02:00',
      status: 'new'
    }, {
      client_id: 8,
      order_type: 'complaint',
      company_name: 'Stena Fastigheter',
      con_pers: 'Mindy',
      con_tel: '0721292314',
      datetime: '2018-05-25 16:00:00.000 +02:00',
      status: 'assigned'
    }, {
      client_id: 7,
      order_type: 'complaint',
      company_name: 'Mäklarringen',
      con_pers: 'Jakob',
      con_tel: '0712391234',
      datetime: '2018-05-24 19:00:00.000 +02:00',
      status: 'done'
    }, {
      client_id: null,
      order_type: 'int_order',
      con_pers: null,
      con_tel: null,
      datetime: '2018-05-25 16:00:00.000 +02:00',
      status: 'assigned'
    }, {
      client_id: null,
      order_type: 'int_order',
      con_pers: null,
      con_tel: null,
      datetime: '2018-05-25 16:00:00.000 +02:00',
      status: 'done'
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('services', null, {});
  }
};
