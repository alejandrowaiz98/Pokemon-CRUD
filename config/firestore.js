
const fs = require('firebase-admin');

const serviceAccount = require('../service-account.json');

const db =  fs.initializeApp({credential: fs.credential.cert(serviceAccount)}).firestore()

exports.GetDBConn = function () {

    return db

}




