const routes = require('express').Router();
const healthcheck = require('../controller/healthcheck');
const { postPokemon } = require("../controller/postPokemon")
const { getPokemons } = require("../controller/getPokemons")
const {getPokemon} = require("../controller/getPokemon")
const {deletePokemon} = require("../controller/deletePokemon")


routes.get("/healthcheck", healthcheck)

routes.post("/save", postPokemon)
routes.get("/read/all", getPokemons)
routes.get("/read/:id", getPokemon)
routes.delete("/delete/:id", deletePokemon)

const appRoutes = (api) => {
    api.use("/", routes);

    // Middleware Not Found
    api.use((req, res, next) => res.status(404).send("Resources Not Found"));
};

module.exports = appRoutes;