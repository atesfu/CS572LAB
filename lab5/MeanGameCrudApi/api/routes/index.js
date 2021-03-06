const express= require("express");
const router= express.Router(); 
const controllerGames= require("../controllers/games.controllers.js"); 
const controllerPublisher= require("../controllers/publisher.controllers.js");

router.route("/games")
.get(controllerGames.gamesGetAll)
.post(controllerGames.gameAddOne);

router.route("/games/:gameId")
.get(controllerGames.gamesGetOne)
.put(controllerGames.gamesUpdateOne)
.delete(controllerGames.gamesDeleteOne);

module.exports = router;