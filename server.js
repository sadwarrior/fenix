const express = require('express')
const pug = require('pug');
const path = require('path');
const parser = require('./parser');

const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static(__dirname + '/static'))

const multer = require('multer')
var upload = multer({
  dest: 'uploads/'
})

app.get('/', function(req, res) {
  parser.getDataObj((message) => {
    res.render(path.join(__dirname, 'views/index.pug'), {
      pageTitle: 'Hey',
      message: message.slice(0, -1).split('|')
    });
  })
})

app.listen(3000);
