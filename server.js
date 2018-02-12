// DEPENDENCIES
// =============================================================
var express = require('express')
var bodyParser = require('body-parser')
// var path = require('path')

// Sets up the Express App

var app = express()
// Port
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./app/routing/apiroutes.js')(app)
require('./app/routing/htmlroutes.js')(app)


// app.use(apiRoutes)
// app.use(htmlRoutes)

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
