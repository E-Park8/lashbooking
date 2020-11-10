const router = require('express').Router()
const { Appointment, User } = require('../models')

router.get('/appointments', (req, res) => {
    Appointment.find()
    .populate('user')
    .then(appointments => res.json(appointments))
    .catch(err => console.log(err))
})

router.get('/appointments/:id', (req, res) => {
    Appointment.findById(req.params.id)
    .then(appointment => res.json(appointment))
    .catch(err => console.log(err))
})

router.post('/appointments', (req, res) => {
    Appointment.create(req.body)
    .then(appointment => User.findByIdAndUpdate(req.body.user, { $push: {appointments: appointment.id}}
    ))
    .then(appointments => res.json(appointments))
    .catch(err => console.error(err))
})


module.exports = router