// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    res.json({message: "Getting task"})
})

router.post('/', (req, res, next) => {
    res.json({message: "Posting task"})
})

module.exports = router