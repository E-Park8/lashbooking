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

router.put('/appointments/:id', (req, res) => {
    Appointment.findByIdAndUpdate(req.paramss.id, req.body)
    .then(appointments => res.json(appointments))
    .catch(err => console.error(err))
})

router.delete('/appointments/:id', (req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})



module.exports = router