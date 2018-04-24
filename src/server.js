var express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 7770

const models = require('./models')
// var User = models.default.User.build({
//     id: 10,
//     type: "employee",
//     name: "John Doe",
//     pers_org_num: "199901019876",
//     password: "qwerty"
// })

// User.save().catch(error => {
//     console.log(error)
// })

// models.user.findAll({ include: [models.customer] }).then(function (User) {
//     User.forEach((User, index) => {
//         console.log("User ID: " + User.id)
//         console.log("User Type: " + User.type)
//         console.log("User Name: " + User.name)
//         console.log("User Pers/Org number: " + User.pers_org_num)
//         if (User.customer) {
//             console.log("Customer ID: " + User.customer.user_id)
//             console.log("Customer Type: " + User.customer.type)
//             console.log("Customer Email: " + User.customer.email)
//             console.log("Customer Tel: " + User.customer.tel)
//             console.log("Customer Address: " + User.customer.address)
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