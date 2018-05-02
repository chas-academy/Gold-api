var models = require('../models');
var User = require('../models').user;
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

	// Find one user by ID
    find(req, res) {
		User.findById(req.params.id, { include: [{ model: models.customer }] })
		.then(function (user) {
            res.status(200).json(user)
		})
		.catch(function (error) {
            res.status(500).json(error)
        })
	},

	// Create an user admin
    createAdmin(req, res) {
		User.sync({force: false, logging: false})
		.then(function () {
			User.create({
				type: "admin",
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
				password: req.body.password
			})
			.then(function (user) {
				res.status(200).json(user.get({ plain: true }))
			})
			.catch(function (error) {
				res.status(500).json(error)
			})
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Create an user employee
    createEmployee(req, res) {
		User.sync({force: false, logging: false})
		.then(function () {
			User.create({
				type: "employee",
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
				password: req.body.password
			})
			.then(function (user) {
				res.status(200).json(user.get({ plain: true }))
			})
			.catch(function (error) {
				res.status(500).json(error)
			})
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Create an user customer
    createCustomer(req, res) {
		User.sync({force: false, logging: false})
		.then(function () {
			User.create({
				type: "customer",
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
				password: req.body.password,
				customer: {
					type: req.body.type,
					email: req.body.email,
					tel: req.body.tel,
					address: req.body.address
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
		.catch(function (error) {
			res.status(500).json(error)
		})
	},
	
	// Update an user admin/epmloyee
	update(req, res) {
		// req.body & req.params.id
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
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Update an user customer
	updateCustomer(req, res) {
		User.findById(req.params.id)
		.then(function (User) {
			User.update({
				name: req.body.name,
				pers_org_num: req.body.pers_org_num,
				customer: {
					email: req.body.email,
					tel: req.body.tel,
					address: req.body.address
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
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Update users password
	updatePass(req, res) {
		User.findById(req.params.id)
		.then(function (User) {
			bcrypt.compare(req.body.password, User.password, function(error, match) {
				if(match) {
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
				} else {
					res.status(500).json("Password didn't match")
				} 
			});
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