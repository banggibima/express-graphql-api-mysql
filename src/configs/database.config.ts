import mysql from 'mysql2/promise';
import config from './config';

const database = mysql.createConnection({
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

export default database;
