var models = require('../models');
var Complaint = require('../models').complaint;
var Service = require('../models').service;

module.exports = {

    //Get a list of complaints
    index(req, res) {
        Complaint.findAll({
            include: [{ model: models.service }]
        })
            .then(function (complaint) {
                res.status(200).json(complaint);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Get a list of complaints by specific id
    show(req, res) {
        Complaint.findById(req.params.id, {
            include: [
                { model: models.service }]
        })
            .then(function (complaint) {
                res.status(200).json(complaint);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Create complaints
    create(req, res) {
        // let hours = req.body.time.split(":")[0]
        // if (hours < 10 && hours.length < 2) {
        //     req.body.time = "0" + req.body.time
        // }
        Service.create({
            order_type: "complaint",
            order_id: req.body.order_id,
            // datetime: new Date(req.body.date + "T" + req.body.time),
            complaint: {
                description: req.body.description,
                image_path: req.body.image_path
            }
        }, {
                include: [models.complaint]
            })
            .then(function (complaint) {
                res.status(200).json(complaint);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    //Update complaints
    update(req, res) {
        // let hours = req.body.time.split(":")[0]
        // if (hours < 10 && hours.length < 2) {
        //     req.body.time = "0" + req.body.time
        // }
        Service.findById(req.params.id, { include: [models.complaint] }).then(function (Service) {
            Service.update({
                order_type: "complaint",
                datetime: new Date(req.body.date + "T" + req.body.time),
                complaint: {
                    description: req.body.description,
                    image_path: req.body.image_path
                }

            }, {
                    include: [models.complaint]
                })
        })
            .then(function (complaint) {
                res.status(200).json(complaint);
            })
            .catch(function (error) {
                res.status(500).json(error);
            })
    },
    //Delete complaints by id
    destroy(req, res) {
        Service.destroy({
            where: {
                id: req.params.id
            },

        })
    }
}