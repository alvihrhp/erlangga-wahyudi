const { Pool } = require("pg");
const dotenv = require("dotenv");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "erlangga",
  password: "b1625nfb",
  port: 5432,
});

module.exports = pool;
