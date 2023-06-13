const { GetDBConn } = require("../config/firestore")

const db = GetDBConn()

exports.SavePokemons = async function (pokemons) {

    try {

        pokemons.forEach(function(pokemon)  {

            console.log(pokemon)

            db.collection(process.env.FIRESTORE_COLLECTION).doc(pokemon.ID).set({
                ...pokemon
            })

        });

        return "saved succesfully"

    } catch (error) {

        console.log(" [MODEL | SavePokemons]: ",error)

        return "¡ERROR!"

    }

}