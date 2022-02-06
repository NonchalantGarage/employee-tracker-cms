const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "twointhebush",
    database: "eeTracker",
  },
  console.log("You are now connected to the database")
);

module.exports = db;
