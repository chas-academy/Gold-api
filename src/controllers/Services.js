var models = require('../models');
var Service = require('../models').service;

module.exports = {
    //Get a list of services using model.findAll()
    index(req, res) {
        Service.findAll({ include: [{ model: models.internal_order, as: "int_orders" },
         { model: models.order }, { model: models.complaint, as: "complaints" }] })
         .then(function (services) {
            res.status(200).json(services);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },
    //Get a service by the unique id using model.findById()
    show(req, res) {
        Service.findById(req.params.id, {
            include: [{ model: models.internal_order, as: "int_orders" },
        { model: models.order }, { model: models.complaint, as: "complaints" }] })
        .then(function (services) {
            res.status(200).json(services);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },
    //Create a new service using model.create()
    create(req, res) {
        Service.create({
            order_type: req.body.type,
            con_pers: req.body.con_pers,
            con_tel: req.body.con_tel
            // status: req.body.status
        })
        .then(function (newService) {
            res.status(200).json(newService);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },
    //Edit existing service details using model.update()
    update(req, res) {
        Service.findById(req.params.id).then(function (Service) {
            Service.update({
                order_type: req.body.type,
                con_pers: req.body.con_pers,
                con_tel: req.body.con_tel
            })
            .then(function (updateServices) {
                res.status(200).json(updateServices);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    }
}
