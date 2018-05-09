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
                            if (error.errors && error.errors[0].message != "pers_org_num must be unique") {
                                User.destroy({ where: { pers_org_num: req.body.pers_org_num } })
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
        User.find({ where: { pers_org_num: req.body.pers_org_num }, include: [models.customer] })
            .then(function (User) {
                bcrypt.compare(req.body.password, User.password, function (error, match) {
                    if (match) {
                        if (User.type == "customer") {
                            let token = "JWT " + jwt.sign({
                                id: User.id,
                                name: User.name,
                                pers_org_num: User.pers_org_num,
                                user_type: User.type,
                                customer_type: User.customer.type,
                                email: User.customer.email,
                                tel: User.customer.tel,
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
                                pers_org_num: User.pers_org_num,
                                user_type: User.type,
                                }, 'jwtsecretcode', {
                                    expiresIn: 86400
                                })
                            res.status(200).json({ token: token })
                        }
                    } else {
                        res.json({ error: "Fel lösenord." })
                    }
                })
            })
            .catch(function (error) {
                res.json({ error: "Kan inte hitta användare med angiven pers-/orgnummer." })
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