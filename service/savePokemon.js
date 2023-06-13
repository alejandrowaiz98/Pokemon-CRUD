'use strict';

const { SavePokemons } = require("../model/savePokemons")

//Removed unused class 'Pokemon'

exports.SavePokemons = function (pokemonData) {

    try {

        const msg = SavePokemons(pokemonData)

        return msg


    } catch (e) {
        logger.error("Error -> " + e)
        throw e;
    }


}