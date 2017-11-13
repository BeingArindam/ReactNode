var config = require('./config')
var express = require('express')
var fs = require('fs')

const server = new express();

server.set('view engine','ejs')

server.get('/', (req, res) => {
    res.render('index', {
        content : 'Hello, Arindam Mondal and EJS!'
    })
})

server.use(express.static('public'))

/*server.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    })
})*/

server.listen(config.port, () => {
    console.log('Server is running on ', config.port)
});