// DEPENDENCIES
// =============================================================
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Sets up the Express App

var app = express()
// Port
var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var apiRoutes = require('./app/routing/apiRoutes.js')
var htmlRoutes = require('./app/routing/htmlRoutes.js')


app.use(apiRoutes)
app.use(htmlRoutes)

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
