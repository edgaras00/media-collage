const express = require("express");
const router = express.Router();
const APIController = require("../controllers/apiController");

router.get("/random/music", APIController.getRandomMusicData);
router.get("/random/movies", APIController.getRandomMovieData);
router.get("/random/games", APIController.getRandomVideoGameData);
router.get("/random/tv", APIController.getRandomTVData);
router.get("/random/anime", APIController.getRandomAnimeData);

router.get("/music", APIController.getMusicData);
router.get("/movies", APIController.getMovieData);
router.get("/games", APIController.getVideoGameData);
router.get("/tv", APIController.getTVData);
router.get("/anime", APIController.getAnimeData);

module.exports = router;
