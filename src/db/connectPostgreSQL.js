// const { Pool } = require("pg");

// async function connectPostgreSQL() {
//   const pool = new Pool({
//     user: "postgres",
//     host: "database-2.crjmudv0xzgu.eu-central-1.rds.amazonaws.com",
//     database: "songs_db",
//     password: "qwer1234",
//     port: 5432,
//   });
//   return pool.connect();
//   // const res = await pool.query("SELECT * FROM songs");
//   // console.log(res.rows[0]);
//   // await pool.end();
// }

// module.exports = { connectPostgreSQL };

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "database-2.crjmudv0xzgu.eu-central-1.rds.amazonaws.com",
  database: "songs_db",
  password: "qwer1234",
  port: 5432,
});

module.exports = pool;
