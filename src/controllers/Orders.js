var models = require('../models');
var Order = require('../models').order;
var Service = require('../models').service;

module.exports = {

    //Get a list of orders
    index(req, res) {
        Order.findAll({
            include: [{ model: models.service }, { model: models.complaint }]
        })
            .then(function (orders) {
                res.status(200).json(orders);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Get a list of orders by specific id
    show(req, res) {
        Order.findById(req.params.id, {
            include: [
                { model: models.service }, { model: models.complaint, as: "complaints" }]
        })
            .then(function (orders) {
                res.status(200).json(orders);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Create orders
    create(req, res) {
        let hours = req.body.time.split(":")[0]
        if (hours < 10 && hours.length < 2) {
            req.body.time = "0" + req.body.time
        }
        Service.create({
            client_id: req.body.userId,
            order_type: "order",
            con_pers: req.body.con_pers,
            con_tel: req.body.con_tel,
            datetime: new Date(req.body.date + "T" + req.body.time),
            order: {
                address: req.body.address,
                description: req.body.description,
                image_path: req.body.image_path
            }

        }, {
                include: [models.order]
            })
            .then(function (orders) {
                res.status(200).json(orders);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Update orders 
    update(req, res) {
        let hours = req.body.time.split(":")[0]
        if (hours < 10 && hours.length < 2) {
            req.body.time = "0" + req.body.time
        }
        Service.findById(req.params.id, { include: [models.order] }).then(function (Service) {
            Service.update({
                order_type: "order",
                con_pers: req.body.con_pers,
                con_tel: req.body.con_tel,
                datetime: new Date(req.body.date + "T" + req.body.time),
            })
                .then(function (order) {
                    Order.findById(req.params.id).then(function (Order) {
                        Order.update({
                            address: req.body.address,
                            description: req.body.description,
                            image_path: req.body.image_path
                        })
                            .then(function (order) {
                                res.status(200).json({ service: Service, order: Order });
                            })
                            .catch(function (error) {
                                res.status(500).json(error);
                            })
                    })
                })
                .catch(function (error) {
                    res.status(500).json(error);
                })
        })
            .catch(function (error) {
                res.status(500).json(error);
            })
    },
    //Delete order by id
    destroy(req, res) {
        Service.destroy({
            where: {
                id: req.params.id
            },

        })
            .then(function (orders) {
                res.status(200).json(orders);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    }
}