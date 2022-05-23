import { Task } from '../models/task.models.js'

export const getAllTasks = async(req, res) => {

    try {
        const tasks = await Task.findAll()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

} 

export const getTaskById = async(req, res) => {

    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: {id}
        })
        res.json(task)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const createTask = async(req, res) => {

    const { name, description, projectId } = req.body;
    try {
        const newTask =  await Task.create({
            name: name,
            description: description,
            projectId: projectId
        })
        res.json(newTask)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }


}

export const updateTask = async(req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const task = await Task.findOne({
            where: {id}
        })
        task.set(req.body)
        await task.save()

        res.json(task)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteTask = async (req, res) => {

    const { id } = req.params;
    try {
        await Task.destroy({
            where: {
                id: id,
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}