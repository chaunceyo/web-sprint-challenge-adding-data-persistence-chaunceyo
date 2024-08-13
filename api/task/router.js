// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
    Task.getTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Task.postTask()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(next)
})



module.exports = router