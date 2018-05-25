'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      service_id: 1,
      address: 'Regementsgatan 52',
      lat: 55.5982742,
      lon: 12.9826941,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491031.jpg']
    }, {
      service_id: 2,
      address: 'Regementsgatan 94',
      lat: 55.5978482,
      lon: 12.9745356,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491032.jpg']
    }, {
      service_id: 3,
      address: 'Sergels väg 11',
      lat: 55.602275,
      lon: 12.9736223,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491033.jpg']
    }, {
      service_id: 4,
      address: 'Einar Hansens Esplanad 37',
      lat: 55.6134363,
      lon: 12.9773816,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491034.jpg']
    }, {
      service_id: 5,
      address: 'Per Albin Hanssons väg 40',
      lat: 55.5867358,
      lon: 12.9739843,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491035.jpg']
    }, {
      service_id: 6,
      address: 'Bennets väg 2',
      lat: 55.5890235,
      lon: 13.0271594,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491036.jpeg']
    }, {
      service_id: 7,
      address: 'Celsiusgatan 40',
      lat: 55.5993789,
      lon: 13.0350059,
      description: 'Detaljerad beskrivning om ärendet. Vad som ska göras, när och hur.',
      image_path: ['src/images/order_img/customer/15258733491037.jpg']
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};