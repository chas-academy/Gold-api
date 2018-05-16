const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var models = require('../models');
var User = require('../models').user;
var Customer = require('../models').customer;
const bcrypt = require('bcryptjs');

module.exports = {

	// Get all users
	all(req, res) {
		User.findAll({ attributes: { exclude: ['password'] }, include: [{ model: models.customer }, { model: models.service, as: "services" }] })
			.then(function (users) {
				res.status(200).json(users)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Get all employees
	allEmployees(req, res) {
		User.findAll({ attributes: { exclude: ['password'] }, where: { type: "employee" }, include: [{ model: models.service, as: "services" }] })
			.then(function (employees) {
				res.status(200).json(employees)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Get all customers
	allCustomers(req, res) {
		User.findAll({ attributes: { exclude: ['password'] }, where: { type: "customer" }, include: [{ model: models.customer }, { model: models.service, as: "services" }] })
			.then(function (customers) {
				res.status(200).json(customers)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Get all admins
	allAdmins(req, res) {
		User.findAll({ attributes: { exclude: ['password'] }, where: { type: "admin" } })
			.then(function (admins) {
				res.status(200).json(admins)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Get all private customers
	allPrivates(req, res) {
		Customer.findAll({ where: { type: "private" }, include: [{ model: models.user, attributes: { exclude: ['password'] } }, { model: models.service, as: "services" }] })
			.then(function (privates) {
				res.status(200).json(privates)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Get all company customers
	allCompanies(req, res) {
		Customer.findAll({ where: { type: "company" }, include: [{ model: models.user, attributes: { exclude: ['password'] } }, { model: models.service, as: "services" }] })
			.then(function (companies) {
				res.status(200).json(companies)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Find one user (non-customer) by ID
	findUser(req, res) {
		User.findById(req.params.id, { attributes: { exclude: ['password'] }, include: [{ model: models.customer }, { model: models.service, as: "services" }] })
			.then(function (user) {
				res.status(200).json(user)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Find one customer by ID
	findCustomer(req, res) {
		Customer.findById(req.params.id, { include: [{ model: models.user, attributes: { exclude: ['password'] } }, { model: models.service, as: "services" }] })
			.then(function (customer) {
				res.status(200).json(customer)
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

    /* FIND ASSIGNED orders and complaints */

    findAssigned(req, res) {
        User.findById(req.params.id, {
			attributes: { exclude: ['password'] },
			include: [
				{ model: models.customer },
				{ model: models.service, as: "services", where: { order_type: { [Op.not]: "int_order" }, status: "assigned" } }
			]
		})
        .then(function (user) {
            res.status(200).json(user)
        })
        .catch(function (error) {
            res.status(500).json({ error: error })
        })
    },

    /* FIND ASSIGNED int_orders */

    findAssignedInt(req, res) {
        User.findById(req.params.id, {
			attributes: { exclude: ['password'] },
			include: [
				{ model: models.customer },
				{ model: models.service, as: "services", where: { order_type: "int_order", status: "assigned" } }
			]
		})
        .then(function (user) {
            res.status(200).json(user)
        })
        .catch(function (error) {
            res.status(500).json({ error: error })
        })
    },

    /* FIND FINISHED orders */
    
    findDone(req, res) {
        User.findById(req.params.id, {
			attributes: { exclude: ['password'] },
			include: [
				{ model: models.customer },
				{ model: models.service, as: "services", where: { status: "done" } }
			]
		})
        .then(function (user) {
            res.status(200).json(user)
        })
        .catch(function (error) {
            res.status(500).json({ error: error })
        })
    },

	// Create an user admin
	create(req, res) {
		User.sync({ force: false, logging: false })
			.then(function () {
				bcrypt.hash(req.body.password, 10, function (error, hash) {
					User.create({
						type: req.body.type,
						name: req.body.name,
						email: req.body.email,
						tel: req.body.tel,
						password: hash
					})
						.then(function (user) {
							res.status(200).json({ message: "Admin skapades" })
						})
						.catch(function (error) {
							res.status(500).json({ error: error })
						})
				})
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Update an user admin/epmloyee
	update(req, res) {
		User.findById(req.params.id)
			.then(function (User) {
				if (req.body.newPassword) {
					bcrypt.hash(req.body.newPassword, 10, function (error, hash) {
						User.update({
							type: req.body.user_type,
							name: req.body.name,
							email: req.body.email,
							tel: req.body.tel,
							password: hash
						})
						.then(function (user) {
							res.status(200).json({ message: "Användare uppdaterat" })
						})
						.catch(function (error) {
							res.status(500).json({ error: error })
						})
					})
				} else {
					User.update({
						type: req.body.user_type,
						name: req.body.name,
						email: req.body.email,
						tel: req.body.tel
					})
					.then(function (user) {
						res.status(200).json({ message: "Användare uppdaterat" })
					})
					.catch(function (error) {
						res.status(500).json({ error: error })
					});
				}
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Update an user customer
	updateCustomer(req, res) {
		User.findById(req.params.id, { include: [models.customer] })
			.then(function (User) {
				if (req.body.newPassword) {
					bcrypt.hash(req.body.newPassword, 10, function (error, hash) {
						User.update({
							name: req.body.name,
							email: req.body.email,
							tel: req.body.tel,
							password: hash,
							customer: {
								type: req.body.type,
								address: req.body.address,
								lat: req.body.lat,
								lon: req.body.lon
							}
						}, {
							include: [models.customer]
						})
						.then(function (user) {
							res.status(200).json({ message: "Kundkonto uppdaterat" })
						})
						.catch(function (error) {
							res.status(500).json({ error: error })
						})
					})
				} else {
					User.update({
						name: req.body.name,
						email: req.body.email,
						tel: req.body.tel,
						customer: {
							type: req.body.type,
							address: req.body.address,
							lat: req.body.lat,
							lon: req.body.lon
						}
					}, {
						include: [models.customer]
					})
					.then(function (user) {
						res.status(200).json({ message: "Kundkonto uppdaterat" })
					})
					.catch(function (error) {
						res.status(500).json({ error: error })
					})
				}
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	},

	// Delete an user
	destroy(req, res) {
		User.destroy({ where: { id: req.params.id } })
			.then(function (user) {
				res.status(200).json({ message: "Användate raderat."})
			})
			.catch(function (error) {
				res.status(500).json({ error: error })
			})
	}
}