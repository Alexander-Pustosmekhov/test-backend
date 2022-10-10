const db = require("../db/connectPostgreSQL");

const getAllSongs = async (req, res, next) => {
  const { artist, genre, year } = req.query;

  try {
    let result = "";
    if (artist === "all" && genre === "all" && year === "all") {
      result = await db.query("SELECT * FROM songs");
    }

    if (artist !== "all" && genre !== "all" && year !== "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE artist IN ('${artist}') AND genre IN ('${genre}') AND year IN ('${year}')`
      );
    }

    if (artist !== "all" && genre !== "all" && year === "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE artist IN ('${artist}') AND genre IN ('${genre}')`
      );
    }

    if (artist !== "all" && genre === "all" && year !== "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE artist IN ('${artist}') AND year IN ('${year}')`
      );
    }

    if (artist !== "all" && genre === "all" && year === "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE artist IN ('${artist}')`
      );
    }

    if (artist === "all" && genre !== "all" && year === "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE genre IN ('${genre}')`
      );
    }

    if (artist === "all" && genre !== "all" && year !== "all") {
      result = await db.query(
        `SELECT * FROM songs WHERE genre IN ('${genre}') AND year IN ('${year}'`
      );
    }

    if (artist === "all" && genre === "all" && year !== "all") {
      result = await db.query(`SELECT * FROM songs WHERE year IN ('${year}')`);
    }

    return res.status(200).json(result.rows);
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { getAllSongs };
