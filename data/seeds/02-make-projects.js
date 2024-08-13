//make seed data!!!

const projects = [
    {project_name: 'Crunch Time', project_description: 'time to crunch', project_completed: false},
    {project_name: 'Future Framework', project_description: 'in the future', project_completed: false},
    {project_name: 'Quality Quest', project_description: 'testing quality', project_completed: true},
    {project_name: 'Growth Strategy', project_description: null, project_completed: false},
]

const resources = [
    {resource_name: 'Chalk Board', resource_description: 'found in office room'},
    {resource_name: 'Clock', resource_description: 'used to tell time'},
    {resource_name: 'Camera', resource_description: 'used to take pictures'},
]


const tasks = [
    {task_description: 'use camera to test quality', task_notes: null, task_completed: false, project_id: 3},
    {task_description: 'statistically plan growth', task_notes: 'should be plenty of growth', task_completed: true, project_id: 4},
    {task_description: 'determine time to crunch', task_notes: null, task_completed: false, project_id: 1},
    {task_description: 'find framework in future', task_notes: 'framework should be new', task_completed: true, project_id: 2},
]

const project_resources = [
    {project_id: 1, resource_id: 2},
    {project_id: 2, resource_id: 2},
    {project_id: 2, resource_id: 3},
    {project_id: 3, resource_id: 3},
    {project_id: 4, resource_id: 1},
]

exports.seed = async function(knex){
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)   
    await knex('project_resources').insert(project_resources)
}