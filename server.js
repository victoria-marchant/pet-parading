const express = require('express')
const hbs = require('express-handlebars')
const petRoutes = require('./routes')
const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/pets', petRoutes)
// Your routes/router(s) should go here

// server.get('/', (req, res) => {
//   readPuppies((puppies) => {
//     res.render('home', puppies)
//   })
// })

// function readPuppies(callback) {
//   fs.readFile('./data.json', 'utf-8', (err, data) => {
//     let puppies = JSON.parse(data)
//     callback(puppies)
//   })
// }
server.get('/', (req, res) => {
  res.redirect('pets')
})

module.exports = server
