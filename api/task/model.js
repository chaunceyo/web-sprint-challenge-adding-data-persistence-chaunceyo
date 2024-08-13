// build your `Task` model here

const db = require('../../data/dbConfig')

async function getTask(){
    const taskRows = await  db('tasks as t')
        .leftJoin('projects as p', 't.project_id' ,'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description')

    taskRows.forEach(row => {
        if(row.task_completed === 1 || row.task_completed === 'true'){
            row.task_completed = true
        }else{
            row.task_completed = false
        }
    })
    return taskRows
   
}

async function postTask(description, notes, completed, project_id){
    const taskRow = await db('tasks').insert({
        task_description: description,
         task_notes: notes,
          task_completed: completed,
          project_id: project_id
        })
    .then(([task_id]) => {
        return db('tasks as t').where('task_id', task_id).first()
    })

    if(taskRow.task_completed === 1 || taskRow.task_completed === 'true'){
        taskRow.task_completed = true
    }else{
        taskRow.task_completed = false
    }

    return taskRow
}       

module.exports = {
    getTask,
    postTask,
}
