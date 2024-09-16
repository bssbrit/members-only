const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "postgres",
  database: "ClubMembers",
  password: "new_password",
  port: 5432 // The default port
});
