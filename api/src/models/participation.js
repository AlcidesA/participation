import Sequelize from 'sequelize';

import database from '../config/database';

const Participation = database.define('Participation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  participation: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

export default Participation;
