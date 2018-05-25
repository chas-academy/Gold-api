'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('complaints', [{
      service_id: 8,
      order_id: 6,
      description: 'Detaljerad beskrivning om reklamation. Vad som ska göras om.',
      image_path: ['src/images/complaint/customer/15258733491031.jpg']
    }, {
      service_id: 9,
      order_id: 7,
      description: 'Detaljerad beskrivning om reklamation. Vad som ska göras om.',
      image_path: ['src/images/complaint/customer/15258733491032.jpg']
    }, {
      service_id: 10,
      order_id: 5,
      description: 'Detaljerad beskrivning om reklamation. Vad som ska göras om.',
      image_path: ['src/images/complaint/customer/15258733491033.jpg']
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('complaints', null, {});
  }
};