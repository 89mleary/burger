var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.en.JAWSDB_url);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "burgers_db"
  });
};

connection.connect();
module.exports = connection;
