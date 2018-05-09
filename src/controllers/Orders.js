var models = require('../models');
var Order = require('../models').order;
var Service = require('../models').service;
var fs = require('fs')
var formidable = require('formidable')

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
        var form = new formidable.IncomingForm()
        form.multiples = true
        form.keepExtensions = true
        var fields = {}
        var files = []
        form.on('field', function(field, value) {
            fields[field] = value
        })
        form.on('file', function(field, file) {
            files.push(file)
        })
        
        form.parse(req, (err, pFields, pFiles) => {
            if (err) res.status(500).json({ error: err })
            files.forEach((image, i) => {
                fs.rename(image.path, 'src/images/order_img/' + image.name, function(error){
                    if (error) {
                        console.log(error)
                    }
                });
            })

            let hours = fields.time.split(":")[0]
            if (hours < 10 && hours.length < 2) {
                fields.time = "0" + fields.time
            }

            var image_paths = []
            files.forEach(file => {
                image_paths.push(file.path)
            })
            
            Service.create({
                client_id: fields.client_id,
                order_type: "order",
                company_name: fields.company_name,
                con_pers: fields.con_pers,
                con_tel: fields.con_tel,
                datetime: new Date(fields.date + "T" + fields.time),
                order: {
                    address: fields.address,
                    description: fields.description,
                    image_path: image_paths
                }

            }, {
                include: [models.order]
            })
            .then(function (order) {
                res.status(200).json({ files: files, fields: fields, order: order });
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
        })
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