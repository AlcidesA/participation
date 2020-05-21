// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'participation',
//   password: '1231',
//   port: 5432,
// });

// export default pool;

import Sequelize from 'sequelize';

const database = new Sequelize('participation', 'postgres', '1231', {
  host: 'localhost',
  dialect: 'postgres'
});

export default database;
