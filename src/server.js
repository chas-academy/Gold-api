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

models.default.User.findOne().then(function (User) {
    console.log(User)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res, next) {
    res.send('GOLD Server Running on http://localhost:' + port + ' or for windows users 192.168.99.100:' + port)
})

app.listen(port, () => {
    console.log('[api][listen] http://localhost:' + port);
})