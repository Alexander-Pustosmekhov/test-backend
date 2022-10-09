const fs = require("fs/promises");
const path = require("path");

const songsPath = path.join(__dirname, "../db/songs.json");

const getAllSongs = async (req, res, next) => {
  const artist = req.query.artist;
  const genre = req.query.genre;
  const year = req.query.year;
  try {
    const data = await fs.readFile(songsPath, "utf-8");
    const songs = JSON.parse(data);
    return res.status(200).json({ songs });
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { getAllSongs };
