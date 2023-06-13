Hola! Este proyecto es un ejemplo de una CRUD api que utiliza pokemones como data para operaciones de creacion, lectura, actualizacion y borrado. Esta basada en Node.js y antes de que te aburras, vamos por el paso a paso de como usarla:

Step by step

1.- Git clone this project 

2.- Go to root folder and use 'npm install' command

3.- Go to console.cloud.google and create a service account with read/write authorization. This will allow you to interact with firestore database. When you do this, put the .JSON file in root folder named 'service-account.json'

4.- Now you can use Nodemon to start this api and re-initialice it whenever you update any file. This will auto-run the project. 

5.- And here we are! Now you can use Postman to interact with the API. Routes are:

/save (POST)
/read/all (GET)
/read/:id (GET)
/delete/:id (DELETE)

When using /save this is the model to interact (dont forget to send it as an array):

Pokemon model:

ID              string
Name            string
Types           string
HasEvolution    boolean

When using /read/:id just simply replace :id with the ID of the pokemon that you want to read.

And thats it. Thanks for reading to this point.