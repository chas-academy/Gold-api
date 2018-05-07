var models = require('../models');
var intOrder = require('../models').internal_order;
var Service = require('../models').service;

module.exports = {

    //Get a list of internal orders
    index(req, res) {
        intOrder.findAll({
            include: [{ model: models.service }]
        })
            .then(function (int_order) {
                res.status(200).json(int_order);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Get a list of internal orders by specific id
    show(req, res) {
        intOrder.findById(req.params.id, {
            include: [
                { model: models.service }]
        })
            .then(function (int_order) {
                res.status(200).json(int_order);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Create internal orders
    create(req, res) {
        // let hours = req.body.time.split(":")[0]
        // if (hours < 10 && hours.length < 2) {
        //     req.body.time = "0" + req.body.time
        // }
        Service.create({
            order_type: "int_order",
            // datetime: new Date(req.body.date + "T" + req.body.time),
            internal_order: {
                description: req.body.description,
                image_path: req.body.image_path
            }
        }, {
                include: [models.internal_order]
            })
            .then(function (int_order) {
                res.status(200).json(int_order);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Update internal orders 
    update(req, res) {
        // let hours = req.body.time.split(":")[0]
        // if (hours < 10 && hours.length < 2) {
        //     req.body.time = "0" + req.body.time
        // }
        Service.findById(req.params.id, { include: [models.int_order] }).then(function (Service) {
            Service.update({
                order_type: "int_order",
                // datetime: new Date(req.body.date + "T" + req.body.time),
                internal_order: {
                    description: req.body.description,
                    image_path: req.body.image_path
                }

            }, {
                    include: [models.internal_order]
                })
        })
            .then(function (int_order) {
                res.status(200).json(int_order);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    },
    //Delete internal orders by id
    destroy(req, res) {
        Service.destroy({
            where: {
                id: req.params.id
            },

        })
    }
}