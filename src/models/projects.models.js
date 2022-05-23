import { sequelize } from '../config/database.js'
import { DataTypes } from 'sequelize'
import { Task } from './task.models.js'

export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    }
})

//references
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})
Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})