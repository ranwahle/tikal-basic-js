const http = require('http')
const express = require('express')
const app = express()

const server = http.createServer(function (req, res) {

});
app.use('/', express.static('public'))
app.listen(8080, () => console.log('listening on port 8080'));