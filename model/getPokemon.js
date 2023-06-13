const { GetDBConn } = require("../config/firestore")

const db = GetDBConn()

exports.GetPokemon = async function(pokemonID) {

    try {

        console.log(typeof pokemonID)

        const pokemon = await db.collection(process.env.FIRESTORE_COLLECTION).doc(pokemonID).get()

        return pokemon.data()

    }catch(e) {

        console.log("[Model | GetPokemon]: ", e)

        return e

    }

}