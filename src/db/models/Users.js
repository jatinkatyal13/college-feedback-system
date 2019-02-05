import Sequelize from 'sequelize'

export const Users = Sequelize.define('users', {
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
