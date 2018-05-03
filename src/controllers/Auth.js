var models = require('../models');
var User = require('../models').user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    // Registration
    register(req, res) {
        User.sync({force: false, logging: false})
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
		})
		.catch(function (error) {
			res.status(500).json(error)
		})
    },

    // Inloggning
    login(req, res) {
        User.find({ where: { pers_org_num: req.body.pers_org_num }, include: [models.customer] })
        .then(function (User) {
			bcrypt.compare(req.body.password, User.password, function(error, match) {
                if (match) {
                    res.status(200).json({
                        token: jwt.sign({
                            id: User.id,
                            name: User.name,
                            pers_org_num: User.pers_org_num,
                            customer_type: User.customer.type,
                            email: User.customer.email,
                            tel: User.customer.tel,
                            address: User.customer.address
                        }, 'mySecret', {
                            expiresIn: 86400
                        })
                    })
                } else {
                    res.status(500).json("Wrong password!")
                }
            })
        })
        .catch(function (error) {
            res.status(500).json("There is no such user.")
        })
    },

    // Checking if user is logged in
    loginRequired(req, res, next) {
        if (req.user) {
            next()
        } else {
            res.status(401).json("Unauthorized user!")
        }
    }
}