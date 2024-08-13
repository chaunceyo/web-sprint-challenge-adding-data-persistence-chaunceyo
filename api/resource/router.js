// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResource()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.postResource()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

module.exports = router