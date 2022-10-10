const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "database-2.crjmudv0xzgu.eu-central-1.rds.amazonaws.com",
  database: "songs_db",
  password: "qwer1234",
  port: 5432,
});

module.exports = pool;
