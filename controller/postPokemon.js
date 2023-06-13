const { SavePokemons } = require("../service/savePokemon")
const logger = require("../config/logger")

exports.postPokemon = async function (req, res) {

    console.log(req.body)

    const msg = await SavePokemons(req.body)

    logger.http(msg)

    console.log(msg)

    return res.send(msg);

}