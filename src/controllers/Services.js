var models = require('../models');
var Service = require('../models').service;

module.exports = {

    index(req, res) {
        Service.findAll({ include: [{ model: models.internal_order, as: "int_orders" },
         { model: models.order }, { model: models.complaint, as: "complaints" }] }).then(function (services) {
            res.send(services);
        })
    }
}
