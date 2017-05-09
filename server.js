const express = require('express')
const app = express()

const multer = require('multer')
var upload = multer({
  dest: 'uploads/'
})

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.post()

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
