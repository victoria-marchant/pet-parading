const fs = require('fs')
const express = require('express')
const router = express.Router()

// home =/pets
router.get('/', (req, res) => {
  readPets((pets) => {
    res.render('home', pets)
  })
})

function readPets(callback) {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    const pets = JSON.parse(data)
    callback(pets)
  })
}

// GET /pets/pets
router.get('/pets', (req, res) => {
  readPets((pets) => {
    res.render('thePets', pets)
  })
})

module.exports = router
