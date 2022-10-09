const express = require("express");
const { getAllSongs } = require("../../controllers/controllersSongs");

const router = express.Router();

router.get("/", getAllSongs);

module.exports = router;
