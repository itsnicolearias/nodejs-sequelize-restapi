import Sequelize from 'sequelize'
import { enviromentConfig } from './environmentConfig.js'

export const sequelize = new Sequelize(
    'projects',
    enviromentConfig.db.user,
    enviromentConfig.db.password,{
    host: 'localhost',
    dialect: 'postgres'
})