import express  from 'express'
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject, getProjectsTasks } from '../controllers/projects.controller.js'

const router = express.Router()

router.get('/', getAllProjects)

router.get('/:id', getProjectById)

router.post('/', createProject)

router.put('/:id', updateProject)

router.delete('/:id', deleteProject)

router.get('/:id/tasks', getProjectsTasks)

export default router;