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
    const {task_description, task_notes, task_completed, project_id} = req.body
    Task.postTask(task_description,task_notes,task_completed,project_id)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})



module.exports = router