var models = require('../models');
var Complaint = require('../models').complaint;
var Service = require('../models').service;

module.exports = {

    //Get a list of complaints
    index(req, res) {
        Complaint.findAll({
            include: [
                {
                    model: models.service
                }
            ]
        })
        .then(function (complaint) {
            res.status(200).json(complaint);
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte hitta reklamationer"});
        });
    },
    //Get a list of complaints by specific id
    show(req, res) {
        Complaint.findById(req.params.id, {
            include: [
                {
                    model: models.service
                }
            ]
        })
        .then(function (complaint) {
            res.status(200).json(complaint);
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte hitta reklamation" });
        });
    },
    //find all assigned complaints
    findAssigned(req, res) {
        Complaint.findAll({
            include: [
                {
                    model: models.service,
                    where: {
                        order_type: "complaint",
                        status: "assigned"
                    }
                }
            ]
        })
        .then(function (complaint) {
            res.status(200).json(complaint)
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte hitta reklamationer" })
        })
    },
    //find all done complaints
    findDone(req, res) {
        Complaint.findAll({
            include: [
                {
                    model: models.service,
                    where: {
                        order_type: "complaint",
                        status: "done"
                    }
                }
            ]
        })
        .then(function (complaint) {
            res.status(200).json(complaint)
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte hitta reklamationer" })
        })
    },
    //Create complaints
    create(req, res) {
        let hours = req.body.time.split(":")[0]
        if (hours < 10 && hours.length < 2) {
            req.body.time = "0" + req.body.time
        }
        Service.create({
            order_type: "complaint",
            datetime: new Date(req.body.date + "T" + req.body.time),
            complaint: {
                order_id: req.body.order_id,
                description: req.body.description,
                image_path: req.body.image_path
            }
        }, {
            include: [models.complaint]
        })
        .then(function (complaint) {
            res.status(200).json({ message: "Reklamation skapades" });
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte skapa reklamation" });
        });
    },
    //Update complaints
    update(req, res) {
        let hours = req.body.time.split(":")[0]
        if (hours < 10 && hours.length < 2) {
            req.body.time = "0" + req.body.time
        }
        Service.findById(req.params.id).then(function (Service) {
            Service.update({
                order_type: "complaint",
                con_pers: req.body.con_pers,
                con_tel: req.body.con_tel,
                datetime: new Date(req.body.date + "T" + req.body.time),
            })
            .then(function () {
                Complaint.findById(req.params.id).then(function (Complaint) {
                    Complaint.update({
                        description: req.body.description,
                        image_path: req.body.image_path
                    })
                    .then(function () {
                        res.status(200).json({ message: "Reklamation uppdaterades" })
                    })
                    .catch(function (error) {
                        res.status(500).json({ error: "Kan inte uppdatera reklamation" })
                    })
                })
                .catch(function (error) {
                    res.status(500).json({ error: "Kan inte hitta reklamation" })
                })
            })
            .catch(function (error) {
                res.status(500).json({ error: "Kan inte uppdatera ärende" })
            })
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte hitta ärende" })
        })
    },
    //Delete complaints by id
    destroy(req, res) {
        Service.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function () {
            res.status(200).json({ message: "Reklamation raderades" });
        })
        .catch(function (error) {
            res.status(500).json({ error: "Kan inte radera reklamation" });
        })
    }
}