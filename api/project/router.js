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
    const {project_name, project_description, project_completed} = req.body
    Project.postProject(project_name,project_description,project_completed)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router