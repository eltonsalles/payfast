const mysql = require('mysql');

const createDBConnection = () => {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })
};

module.exports = () => createDBConnection;
