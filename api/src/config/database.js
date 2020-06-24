import Sequelize from 'sequelize';

const database = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres'
  }
);

export default database;
