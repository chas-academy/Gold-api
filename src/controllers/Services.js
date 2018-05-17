var models = require('../models');
var Service = require('../models').service;

module.exports = {
	//Get a list of services using model.findAll()
	index(req, res) {
		Service.findAll({
			include: [
				{
					model: models.internal_order,
					as: "int_orders"
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
				}
			]
		})
		.then(function (services) {
			res.status(200).json(services);
		})
		.catch(function (error) {
			res.status(500).json({ error: "Kan inte hitta ärende" });
		});
	}

}
