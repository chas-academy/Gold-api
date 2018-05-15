var models = require('../models');
var User = require('../models').user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    // Registration
    register(req, res) {
        User.sync({ force: false, logging: false })
            .then(function () {
                bcrypt.hash(req.body.password, 10, function (error, hash) {
                    User.create({
                        type: "customer",
                        name: req.body.name,
                        password: hash,
                        type: req.body.type,
                        email: req.body.email,
                        tel: req.body.tel,
                        address: req.body.address,
                        lat: req.body.lat,
                        lon: req.body.lon
                    }, {
                            // include: [models.customer, models.customer_employees]
                        })
                        .then(function (user) {
                            res.status(200).json(user.get({ plain: true }))
                        })
                        .catch(function (error) {
                            if (error.errors && error.errors[0].message != "email must be unique") {
                                User.destroy({ where: { email: req.body.email} })
                            }
                            res.status(500).json({ error: error })
                        })
                })
            })
            .catch(function (error) {
                res.status(500).json({ error: error })
            })
    },

    // Inloggning
    login(req, res) {
        User.find({ where: { email: req.body.email}, include: [models.customer] })
            .then(function (User) {
                bcrypt.compare(req.body.password, User.password, function (error, match) {
                    if (match) {
                            let token = "JWT " + jwt.sign({
                                id: User.id,
                                name: User.name,
                                user_type: User.type,
                                customer_type: User.customer.type,
                                email: User.email,
                                tel: User.tel,
                                address: User.address,
                                lat: User.lat,
                                lon: User.lon
                                }, 'jwtsecretcode', {
                                    expiresIn: 86400
                                })
                            res.status(200).json({ token: token })
                        } else {
                        res.json({ error: "Fel lösenord" })
                    }
                })
            })
            .catch(function (error) {
                res.json({ error: "Kan inte hitta användare med denna email" })
            })
    },

    // Checking if user is logged in
    loginRequired(req, res, next) {
        if (req.user) {
            next()
        } else {
            res.status(401).json({ msg: "Unauthorized user." })
        }
    }
}