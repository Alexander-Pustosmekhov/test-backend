const { Client } = require("pg");

async function init() {
  const client = new Client({
    //user: 'dbuser',
    host: "localhost",
    database: "postgres",
    //password: 'secretpassword',
    port: 5432,
  });
  await client.connect();
  const res = await client.query("SELECT * FROM songs");
  console.log(res.rows[0]); // Hello world!
  await client.end();
}

module.exports = { init };
