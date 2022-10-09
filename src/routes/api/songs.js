const express = require("express");
// const {
//   userRegistration,
//   userLogin,
//   userLogout,
//   getCurrentUser,
//   loginGoogleUsers,
// } = require("../../controllers/controllerUsers");
const { getAllSongs } = require("../../controllers/controllersSongs");
// const { userValidate } = require("../../middlewares/validateUsers");

const router = express.Router();

router.get("/", getAllSongs);

module.exports = router;
