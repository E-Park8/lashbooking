const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./appointmentRoutes.js'))

module.exports = router
