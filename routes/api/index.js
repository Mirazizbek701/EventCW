const express = require('express')
const event_router = require('./event')

const router = express.Router()

router.use('/event', event_router)

module.exports = router
