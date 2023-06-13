const { DeletePokemon } = require("../model/deletePokemon")

exports.DeletePokemon = function (pokemonID) {

    try {

        const msg = DeletePokemon(pokemonID)

        return msg

    } catch (e) {

        return e

    }

}