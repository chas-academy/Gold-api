var express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 7770

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res, next) {
    res.send('GOLD Server Running on http://localhost:' + port + ' or for windows users 192.168.99.100:' + port)
})

app.listen(port, () => {
    console.log('[api][listen] http://localhost:' + port);
})