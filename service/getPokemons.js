'use strict';

const {GetPokemons} = require("../model/getPokemons")

exports.GetPokemons = function () {

    try {

        const pokemons = GetPokemons()

        return pokemons

    }catch(e) {

        return e

    }

}