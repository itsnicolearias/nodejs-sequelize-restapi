import { Project } from '../models/projects.models.js'
import { Task } from '../models/task.models.js'

export const getAllProjects = async(req, res) => {
    try {
       const projects = await Project.findAll()
       res.json(projects)  
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
   

}

export const getProjectById = async(req, res) => {

    const { id } = req.params;
    try {
        const project = await Project.findOne({
           where: {id} 
        })
        res.json(project)
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }

}

export const createProject = async(req, res) => {
    const { name, description, priority } = req.body
    try {
       const newProject = await Project.create({
        name: name,
        description: description,
        priority: priority
    })
    res.json(newProject)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}    

export const updateProject = async(req, res) => {

   const { id } = req.params;
   const { name, description, priority } = req.body;
    
   try {  
        const project = await Project.findByPk(id)
        project.name = name;
        project.description = description;
        project.priority = priority;
        await project.save()

        res.json(project)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteProject = async(req, res) => {

    const { id } = req.params
    try {
        await Project.destroy({
            where: {
                id: id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message}) 
    }

}

export const getProjectsTasks = async(req, res) => {
    //primero necesito el id del proyecto
    const { id } = req.params;

    try {
        const tasks = await Task.findAll({
            where: { projectId: id }
        })
        res.json(tasks)
    } catch (error) {
        
    }
}