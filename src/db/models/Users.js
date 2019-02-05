import { db as sequelize } from '../config'
import Sequelize from 'sequelize'

export const Users = sequelize.define('users', {
  rollNumbers: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
