const { GetPokemon } = require("../service/getPokemon")
const logger = require("../config/logger")

exports.getPokemon = async function (req, res) {

    try {

        const pokemon = await GetPokemon(req.params.id)

        logger.http(pokemon)

        return res.send(pokemon)

    } catch (e) {

        console.log("[Controller | GetPokemon]: ", e)

    }



}