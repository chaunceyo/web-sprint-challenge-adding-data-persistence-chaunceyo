// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    res.json({message: "Getting resource"})
})

router.post('/', (req, res, next) => {
    res.json({message: "Posting resource"})
})

module.exports = router