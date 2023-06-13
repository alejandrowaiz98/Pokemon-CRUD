const {GetPokemon} = require("../model/getPokemon")

exports.GetPokemon = function(pokemonID) {

    try {

        const pokemon = GetPokemon(pokemonID)

        return pokemon

    }catch(e) {

        console.log("[Service | GetPokemon]: ", e)

        return e

    }

}