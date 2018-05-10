var models = require('../models');
var User = require('../models').user;
var Customer = require('../models').customer;
const bcrypt = require('bcryptjs');

module.exports = {

	// Get all users
    all(req, res) {
		User.findAll({ include: [{ model: models.customer }, { model: models.service, as: "services" }] })
		.then(function (users) {
            res.status(200).json(users)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
    },

	// Get all employees
    allEmployees(req, res) {
		User.find({ where: { type: "employee" }, include: [{ model: models.service, as: "services" }] })
		.then(function (employees) {
            res.status(200).json(employees)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Get all customers
    allCustomers(req, res) {
		User.find({ where: { type: "customer" }, include: [{ model: models.customer }, { model: models.service, as: "services" }] })
		.then(function (customers) {
            res.status(200).json(customers)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Get all private customers
    allPrivate(req, res) {
		Customer.find({ where: { type: "private" }, include: [{ model: models.user }, { model: models.service, as: "services" }] })
		.then(function (private) {
            res.status(200).json(private)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Get all company customers
    allCompanies(req, res) {
		Customer.find({ where: { type: "company" }, include: [{ model: models.user }, { model: models.service, as: "services" }] })
		.then(function (companies) {
            res.status(200).json(companies)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Find one user (non-customer) by ID
    findUser(req, res) {
		User.findById( req.params.id, { include: [{ model: models.customer }, { model: models.service, as: "services" }] })
		.then(function (user) {
            res.status(200).json(user)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Find one customer by ID
    findCustomer(req, res) {
		Customer.findById( req.params.id, { include: [{ model: models.user }, { model: models.service, as: "services" }] })
		.then(function (customer) {
            res.status(200).json(customer)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Create an user admin
    createAdmin(req, res) {
		User.sync({ force: false, logging: false })
		.then(function () {
			bcrypt.hash(req.body.password, 10, function(error, hash) {
				User.create({
					type: "admin",
					name: req.body.name,
					pers_org_num: req.body.pers_org_num,
					password: hash
				})
				.then(function (user) {
					res.status(200).json(user.get({ plain: true }))
				})
				.catch(function (error) {
					res.status(500).json(error)
				})
			})
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Create an user employee
    createEmployee(req, res) {
		User.sync({ force: false, logging: false })
		.then(function () {
			bcrypt.hash(req.body.password, 10, function(error, hash) {
				User.create({
					type: "employee",
					name: req.body.name,
					pers_org_num: req.body.pers_org_num,
					password: hash
				})
				.then(function (user) {
					res.status(200).json(user.get({ plain: true }))
				})
				.catch(function (error) {
					res.status(500).json(error)
				})
			})
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Create an user customer
    createCustomer(req, res) {
		User.sync({ force: false, logging: false })
		.then(function () {
			bcrypt.hash(req.body.password, 10, function(error, hash) {
				User.create({
					type: "customer",
					name: req.body.name,
					pers_org_num: req.body.pers_org_num,
					password: hash,
					customer: {
						type: req.body.type,
						email: req.body.email,
						tel: req.body.tel,
						address: req.body.address,
						lat: req.body.lat,
						lon: req.body.lon
					}
				}, {
					include: [models.customer]
				})
				.then(function (user) {
					res.status(200).json(user.get({ plain: true }))
				})
				.catch(function (error) {
					res.status(500).json(error)
				})
			})
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},
	
	// Update an user admin/epmloyee
	update(req, res) {
		User.findById(req.params.id)
		.then(function (User) {
			User.update({
				type: req.body.user_type,
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
			})
			.then(function (user) {
				res.status(200).json(user.get({ plain: true }))
			})
			.catch(function (error) {
				res.status(500).json(error)
			});

			if (req.body.newPassword) {
				bcrypt.hash(req.body.newPassword, 10, function(error, hash) {
					User.update({
						password: hash
					})
					.then(function (user) {
						res.status(200).json(user.get({ plaint: true }))
					})
					.catch(function (error) {
						res.status(500).json(error)
					})
				})
			}
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Update an user customer
	updateCustomer(req, res) {
		User.findById(req.params.id, { include: [models.customer] })
		.then(function (User) {
			User.update({
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
				customer: {
					type: req.body.type,
					email: req.body.email,
					tel: req.body.tel,
					address: req.body.address,
					lat: req.body.lat,
					lon: req.body.lon
				}
			}, {
				include: [models.customer]
			})
			.then(function (user) {
				res.status(200).json(user.get({ plain: true }))
			})
			.catch(function (error) {
				res.status(500).json(error)
			})

			if (req.body.newPassword) {
				bcrypt.hash(req.body.newPassword, 10, function(error, hash) {
					User.update({
						password: hash
					})
					.then(function (user) {
						res.status(200).json(user.get({ plaint: true }))
					})
					.catch(function (error) {
						res.status(500).json(error)
					})
				})
			}
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Delete an user
	destroy(req, res) {
		User.destroy({ where: { id: req.params.id } })
		.then(function (user) {
			res.status(200).json(user.get({ plain: true }))
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	}
}