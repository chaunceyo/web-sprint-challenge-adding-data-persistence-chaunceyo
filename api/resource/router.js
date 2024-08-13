// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResource(req.params.resource_id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const {resource_name, resource_description} = req.body
    Resource.postResource(resource_name, resource_description)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
})

module.exports = router