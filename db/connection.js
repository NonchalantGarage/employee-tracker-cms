const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "user",
    password: "jackofalltrades",
    database: "eetracker",
  },
  console.log("You are now connected to the database")
);

module.exports = db;
