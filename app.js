const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const moment = require('moment')
app.locals.moment = moment;
const port = 5000

// static files
app.use(express.static('public')) 
app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/img', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/css'))

// templating engine
app.set('views', './src/views/partials')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))

// routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
}) 