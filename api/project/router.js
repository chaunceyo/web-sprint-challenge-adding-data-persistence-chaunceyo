// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    res.json({message: "Getting project"})
})

router.post('/', (req, res, next) => {
    res.json({message: "Posting project"})
})

module.exports = router