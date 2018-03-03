'use strict'

const User = require('../Models/Users');

function saveUser (req, res) {
    
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error: ${err}` })

    return res.status(201).send({ message: 'Usuario Creado' })
  })
}

function getUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!users) return res.status(404).send({message: 'No existen usuarios'})
   
    res.status(200).send({users})
  })
}

module.exports = {
  saveUser,
  getUsers
}
