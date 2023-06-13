const PORT = process.env.PORT || "8080";
const api = require('./server');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })


console.log(process.env.FIRESTORE_COLLECTION)

api.listen(PORT, () => {
  
  console.log(`Listening into ${PORT}`)

});
