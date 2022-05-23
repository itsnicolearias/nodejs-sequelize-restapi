import express from 'express'
import ProjectsRoutes from './projects.routes.js'
import taskRoutes from './task.routes.js'

const router = express.Router()

router.use('/projects', ProjectsRoutes)

router.use('/tasks', taskRoutes)

export default router;