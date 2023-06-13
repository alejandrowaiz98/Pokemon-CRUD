const {GetPokemons} = require("../service/getPokemons")
const logger = require("../config/logger")

exports.getPokemons = async function(req, res) {

    const pokemons = await GetPokemons()

    logger.http(pokemons)

    console.log(pokemons)

    return res.send(pokemons)
    

}