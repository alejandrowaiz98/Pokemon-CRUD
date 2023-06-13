const { GetDBConn } = require("../config/firestore")

const db = GetDBConn()

exports.DeletePokemon = async function(pokemonID){

    try {

        const pokemon = await db.collection(process.env.FIRESTORE_COLLECTION).doc(pokemonID).delete()

        return `[Model]: Deleted pokemon with id: ${pokemonID}`

    }catch(e) {

        console.log("[Model | DeletePokemon]: ", e)

        return e

    }



}