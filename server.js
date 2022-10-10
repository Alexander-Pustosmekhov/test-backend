require("dotenv").config();
const app = require("./app");
const db = require("./src/db/connectPostgreSQL");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await db.connect();
    console.log("Database connection successful");
    console.log(`Server running. Use our API on port: ${PORT}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
});
