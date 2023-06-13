const {DeletePokemon} = require("../service/deletePokemon")
const logger = require("../config/logger")

exports.deletePokemon = async function(req, res) {

    try {

        const msg = await DeletePokemon(req.params.id)

        logger.http(msg)

        return res.send(msg)

    }catch(e){

        return res.send(e)

    }


}