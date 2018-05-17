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
                        res.status(200).json({ message: "Kontot skapades"})
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

    // Inloggning
    login(req, res) {
        User.find({ where: { email: req.body.email }, include: [models.customer] })
            .then(function (User) {
                bcrypt.compare(req.body.password, User.password, function (error, match) {
                    if (match) {
                        if (User.type == "customer") {
                            let token = "JWT " + jwt.sign({
                                id: User.id,
                                name: User.name,
                                user_type: User.type,
                                customer_type: User.customer.type,
                                email: User.email,
                                tel: User.tel,
                                address: User.customer.address,
                                lat: User.customer.lat,
                                lon: User.customer.lon
                                }, 'jwtsecretcode', {
                                    expiresIn: 86400
                                })
                            res.status(200).json({ token: token })
                        } else {
                            let token = "JWT " + jwt.sign({
                                id: User.id,
                                name: User.name,
                                email: User.email,
                                tel: User.tel,
                                user_type: User.type,
                                }, 'jwtsecretcode', {
                                    expiresIn: 86400
                                })
                            res.status(200).json({ token: token })
                        }
                    } else {
                        res.json({ error: "Fel lösenord" })
                    }
                })
            })
            .catch(function (error) {
                res.json({ error: "Kan inte hitta användare med angiven email" })
            })
    },

    // Checking if user is logged in
    loginRequired(req, res, next) {
        if (req.user) {
            next()
        } else {
            res.status(401).json({ error: "Unauthorized user" })
        }
    }
}