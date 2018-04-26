var express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 7770

const models = require('./models')



// ----------- Create a customer user
// var User = models.user.build({
//     type: "customer",
//     name: "Thor",
//     pers_org_num: "191501019999",
//     password: "qwerty",
//     customer: {
//         type: "private",
//         email: "example@email.com",
//         tel: "0737448989",
//         address: "Asgard Torg 15"
//     }
// }, {
//     include: [models.customer]
// })

// User.save().catch(error => {
//     console.log(error)
// })



// ----------- Create an order from an customer
// models.user.find({ where: { id:1 }, include: [models.customer] }).then(function (user) {
//     var Service = models.service.build({
//         client_id: user.id,
//         order_type: "order",
//         con_pers: user.name,
//         con_tel: user.customer.tel,
//         datetime: "2020-03-08 15:00:00.000+2",
//         order: {
//             address: user.customer.address,
//             description: "Order desc",
//             image_path: "images"
//         }
//     }, {
//         include: [models.order]
//     })

//     Service.save().catch(error => {
//         console.log(error)
//     })
// })



// ----------- Create a complaint from an customer
// models.user.find({ where: { id:1 }, include: [models.customer] }).then(function (user) {
//     models.service.find({ where: { id: 1 }}).then(function (service) {
//         var Service = models.service.build({
//             client_id: user.id,
//             order_type: "complaint",
//             con_pers: user.name,
//             con_tel: user.customer.tel,
//             datetime: "2020-03-08 15:00:00.000+2",
//             complaints: {
//                 order_id: service.id,
                // description: "Complaint desc",
//                 image_path: "images"
//             }
//         }, {
//             include: [{model: models.complaint, as: "complaints"}]
//         })
        
//         Service.save().catch(error => {
//             console.log(error)
//         })
//     })
// })



// ----------- See whole complaint info
// models.complaint.find({where: {service_id:2}, include: [models.order, models.service]}).then(function (complaint) {
//     console.log(complaint.service.con_pers)
//     console.log(complaint.service.con_tel)
//     console.log(complaint.service.datetime)
//     console.log(complaint.order.address)
//     console.log(complaint.description)
//     console.log(complaint.image_path)
// })


// ----------- Cast a service on an employee
// models.service.find({where: {id:1}}).then(function (service) {
//     models.user.find({where: {id:2}}).then(function (employee) {
//         employee.addService(service)
//     })
// })



// ----------- See all services of an employee
// models.user.find({where: {id:2}, include: [{model: models.service, as: "services"}]}).then(function (employee) {
//     employee.services.forEach((service, index) => {
//         console.log(service.order_type)
//     })
// })



// ----------- See all users and (if) customer info
// models.user.findAll({ include: [models.customer] }).then(function (User) {
//     User.forEach((user, index) => {
//         console.log("User ID: " + user.id)
//         console.log("User Type: " + user.type)
//         console.log("User Name: " + user.name)
//         console.log("User Pers/Org number: " + user.pers_org_num)
//         if (user.customer) {
//             console.log("Customer ID: " + user.customer.user_id)
//             console.log("Customer Type: " + user.customer.type)
//             console.log("Customer Email: " + user.customer.email)
//             console.log("Customer Tel: " + user.customer.tel)
//             console.log("Customer Address: " + user.customer.address)
//         }
//         console.log("")
//     })
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res, next) {
    res.send('GOLD Server Running on http://localhost:' + port + ' or for windows users 192.168.99.100:' + port)
})

app.listen(port, () => {
    console.log('[api][listen] http://localhost:' + port);
})