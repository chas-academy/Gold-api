var models = require('../models');
var Service = require('../models').service;

module.exports = {
	//Get a list of services using model.findAll()
	index(req, res) {
		Service.findAll({
			include: [{ model: models.internal_order, as: "int_orders" },
			{ model: models.order }, { model: models.complaint, as: "complaints" }]
		})
			.then(function (services) {
				res.status(200).json(services);
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
			include: [{ model: models.internal_order, as: "int_orders" },
			{ model: models.order }, { model: models.complaint, as: "complaints" }]
		})
			.then(function (services) {
				res.status(200).json(services);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	//Get a list of services with status "taken"
	showTaken(req, res) {
		Service.findAll({
			where: {
				status: "taken"
			},
			include: [{ model: models.internal_order, as: "int_orders" },
			{ model: models.order }, { model: models.complaint, as: "complaints" }]
		})
			.then(function (services) {
				res.status(200).json(services);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	},
	//Get a list of services with status "done"
	showDone(req, res) {
		Service.findAll({
			where: {
				status: "done"
			},
			include: [{ model: models.internal_order, as: "int_orders" },
			{ model: models.order }, { model: models.complaint, as: "complaints" }]
		})
			.then(function (services) {
				res.status(200).json(services);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	}

}
