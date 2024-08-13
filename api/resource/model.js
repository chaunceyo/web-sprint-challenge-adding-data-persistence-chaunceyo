// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResource(){
   return await db('resources')
}

async function postResource(name, description){
    return await db('resources').insert({resource_name: name, resource_description: description})
    .then(([resource_id])=> {
        return  db('resources').where('resource_id', resource_id).first()
    })
}

module.exports = {
    getResource, 
    postResource
}