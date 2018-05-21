var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')


const app = express()
const port = process.env.PORT || 7770

const models = require('./models')
const jsonwebtoken = require('jsonwebtoken');

models.sequelize.sync({ logging: false }) // sync to help unique validations

app.use(morgan('dev'))
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'jwtsecretcode', function (error, decode) {
            if (error) req.user = undefined
            req.user = decode
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})

import routes from './routes';

app.get('/', function (req, res, next) {
    res.send('GOLD Server Running on http://localhost:' + port + ' or for windows users 192.168.99.100:' + port)
})

app.listen(port, () => {
    console.log('[api][listen] http://localhost:' + port);
})

routes(app)