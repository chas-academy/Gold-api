var models = require('../models');
var Service = require('../models').service;
var path = require('path');

module.exports = {
	//Get a list of services using model.findAll()
	index(req, res) {
		Service.findAll({
			include: [
				{
					model: models.internal_order
				}, {
					model: models.order
				}, {
					model: models.complaint,
					include: [
						{
							model: models.order
						}
					]
				}, {
					model: models.user,
					as: "employees"
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" });
		});
	},
	show(req, res) {
		Service.findById(req.params.id, {
			include: [
				{
					model: models.internal_order
				}, {
					model: models.order
				}, {
					model: models.complaint,
					include: [
						{
							model: models.order
						}
					]
				}, {
					model: models.user,
					as: "employees"
				}
			]
		})
		.then(function (service) {
			res.status(200).json(service)	
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" })
		})
	},
	findByCustomer(req, res) {
		models.customer.findById(req.params.id, {
			include: [
				{
					model: models.service,
					as: "services",
					where: {
						client_id: req.params.id
					},
					include: [
						{
							model: models.order
						}, {
							model: models.complaint,
							include: [
								{
									model: models.order
								}
							]
						}
					]
				}, {
					model: models.user,
					attributes: {
						exclude: ['password']
					}
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte ärende" });
		});
	},
	showNew(req, res) {
		Service.findById(req.params.id, {
			include: [{ model: models.internal_order },
			{ model: models.order }, { model: models.complaint }]
		})
			.then(function (service) {
				res.status(200).json(service);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	//Get a list of services with status "new"
	showNew(req, res) {
		Service.findAll({
			where: {
				status: "new"
			},
			include: [
				{
					model: models.internal_order
				}, {
					model: models.order
				}, {
					model: models.complaint,
					include: [
						{
							model: models.order
						}
					]
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" });
		});
	},
	//Get a list of services with status "new"
	showAssigned(req, res) {
		Service.findAll({
			where: {
				status: "assigned"
			},
			include: [
				{
					model: models.internal_order
				}, {
					model: models.order
				}, {
					model: models.complaint,
					include: [
						{
							model: models.order
						}
					]
				}, {
					model: models.user,
					as: "employees"
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" });
		});
	},
	//Get a list of services with status "done"
	showDone(req, res) {
		Service.findAll({
			where: {
				status: "done"
			},
			include: [
				{
					model: models.internal_order
				}, {
					model: models.order
				}, {
					model: models.complaint,
					include: [
						{
							model: models.order
						}
					]
				}, {
					model: models.user,
					as: "employees"
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" });
		});
	},
	// Handle a service and assign someone to it
	serviceHandle(req, res) {
		let isError = false
		var ServiceType = function (type) {
			switch (type) {
				case "order":
					return models.order
					break
				case "complaint":
					return models.complaint
					break
				case "int_order":
					return models.internal_order
					break
			}
		}(req.params.type)
		let hours = req.body.time.split(":")[0]
        if (hours < 10 && hours.length < 2) {
            req.body.time = "0" + req.body.time
        }
		Service.findById(req.params.id).then(function (Service) {
			Service.update({
				datetime: new Date(req.body.date + "T" + req.body.time),
				status: "assigned"
            })
            .then(function () {
                ServiceType.findById(req.params.id).then(function (ServiceType) {
                    ServiceType.update({
                        description: req.body.description
                    })
                    .then(function () {
						try {
							req.body.employees.forEach(employee => {
								models.employee_service.create({
									userId: employee,
									serviceId: req.params.id
								})
							})
						}
						catch(error) {
							res.status(500).json({ error: "Kan inte assigna anställda" })
							isError = true
							Service.update({
								status: "new"
							})
							throw error
						}
                        res.status(200).json({ message: "Ärende blev hanterad" })
                    })
                    .catch(function (error) {
						if (!isError) {
							res.status(500).json({ error: "Kan inte uppdatera " + req.params.type + " ärende" });
						}
                    })
                })
                .catch(function (error) {
                    res.status(500).json({ error: "Kan inte hitta " + req.params.type + " ärende" })
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
	// an employee completing the order
	serviceComplete(req, res) {
		Service.findById(req.params.id)
		.then(function (Service) {
			Service.update({
				status: "done"
			})
			.then(function () {
				res.status(200).json({ message: "Ärende slutförades" })
			})
			.catch(function (error) {
				res.status(500).json({ error: "Kan inte uppdatera ärende" })
			})
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" })
		})
	},
	getImagesOrderCustomer(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/order_img/customer/' + req.params.img))
	},
	getImagesOrderEmployee(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/order_img/employee/' + req.params.img))
	},
	getImagesOrderIntCustomer(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/int_order_img/customer/' + req.params.img))
	},
	getImagesOrderIntEmployee(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/int_order_img/employee/' + req.params.img))
	},
	getImagesComplaintCustomer(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/complaint_img/customer/' + req.params.img))
	},
	getImagesComplaintEmployee(req, res) {
		res.sendFile(path.resolve(__dirname + '../../images/complaint_img/employee/' + req.params.img))
	}


}
