'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('employee_services', [{
        userId: '2',
        serviceId: '3'
      }, {
        userId: '3',
        serviceId: '3'
      }, {
        userId: '4',
        serviceId: '3'
      }, {
        userId: '2',
        serviceId: '4'
      }, {
        userId: '3',
        serviceId: '4'
      }, {
        userId: '4',
        serviceId: '4'
      }, {
        userId: '2',
        serviceId: '5'
      }, {
        userId: '3',
        serviceId: '5'
      }, {
        userId: '4',
        serviceId: '5'
      }, {
        userId: '2',
        serviceId: '6'
      }, {
        userId: '3',
        serviceId: '6'
      }, {
        userId: '4',
        serviceId: '6'
      }, {
        userId: '2',
        serviceId: '7'
      }, {
        userId: '3',
        serviceId: '7'
      }, {
        userId: '4',
        serviceId: '7'
      }, {
        userId: '2',
        serviceId: '9'
      }, {
        userId: '3',
        serviceId: '9'
      }, {
        userId: '4',
        serviceId: '9'
      }, {
        userId: '2',
        serviceId: '10'
      },{
        userId: '3',
        serviceId: '10'
      },{
        userId: '4',
        serviceId: '10'
      },{
        userId: '2',
        serviceId: '11'
      },{
        userId: '3',
        serviceId: '11'
      },{
        userId: '4',
        serviceId: '11'
      },{
        userId: '2',
        serviceId: '12'
      },{
        userId: '3',
        serviceId: '12'
      },{
        userId: '4',
        serviceId: '12'
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employee_services', null, {});
}
};