import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  database: {
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT as string),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    name: process.env.MYSQL_NAME,
  },
};

export default config;
