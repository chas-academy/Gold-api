var models = require('../models');
var User = require('../models').user;

module.exports = {

	// Show all users
    index(req, res) {
        User.findAll({ include: [{ model: models.customer }, { model: models.service, as: "services" }] }).then(function (users) {
            res.status(200).json(users)
        }).catch(function (error) {
            res.status(500).json(error)
        })
    },

	// Show one user by ID
    show(req, res) {
		// req.params.id
        User.findById(req.params.id, { include: [{ model: models.customer }] }).then(function (user) {
            res.status(200).json(user)
        }).catch(function (error) {
            res.status(500).json(error)
        })
      },

	// Create an admin user
    createAdmin(req, res) {
		// req.body
		User.sync({force: false, logging: false}).then(function () {
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
	},

	// Create an employee user
    createEmployee(req, res) {
		// req.body
		User.sync({force: false, logging: false}).then(function () {
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
	},

	// Create a customer user
    createCustomer(req, res) {
		// req.body
		User.sync({force: false, logging: false}).then(function () {
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
	},
	
	// Update an user
	update(req, res) {
		// req.body & req.params.id
		User.findById(req.params.id).then(function (User) {
			if (User.customer) {
				User.update({
					type: req.body.user_type,
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
				});
			} else {
				User.update({
					type: req.body.user_type,
					name: req.body.name,
					pers_org_num: req.body.pers_org_num,
					password: req.body.password
				})
				.then(function (user) {
					res.status(200).json(user.get({ plain: true }))
				})
				.catch(function (error) {
					res.status(500).json(error)
				});
			}
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
	},

	// Delete an user
	destroy(req, res) {
		// req.params.id
	}
}