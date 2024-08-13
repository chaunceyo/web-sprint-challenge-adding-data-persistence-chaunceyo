// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProject(){
   const projectRows = await db('projects')
   
   projectRows.forEach(row => {
        if(row.project_completed === 0){
            row.project_completed = false
        }else if(row.project_completed === 1){
            row.project_completed = true
        }
   })

   return projectRows
}

async function postProject(name, description, completed){
    const projectRow = await db('projects').insert({project_name: name, project_description: description, project_completed: completed})
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })

        if(projectRow.project_completed === 'true' ||  projectRow.project_completed === 1){
            projectRow.project_completed = true
        }else{
            projectRow.project_completed = false
        }
    
    return projectRow
}

module.exports = {
    getProject,
    postProject,
}