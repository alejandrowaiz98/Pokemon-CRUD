const { GetDBConn } = require("../config/firestore")

const db = GetDBConn()

exports.GetPokemons = async function () {

    try {

        const pokemons = await db.collection(process.env.FIRESTORE_COLLECTION).get()

        let responseArr = [];

        pokemons.forEach(pokemon => {

            responseArr.push(pokemon.data())

        })

        return responseArr

    }catch(error) {

        return error

    }

}