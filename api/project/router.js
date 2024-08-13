// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProject()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.postProject()
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router