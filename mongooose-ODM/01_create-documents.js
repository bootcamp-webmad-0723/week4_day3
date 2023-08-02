// db connection
require('./db/db-connection')

// model
const Dog = require('./models/dog.model')



// .create()
// argumento: objeto a crear en la BBDD
// retorno: objeto creado en BBDD
Dog
    .create({ name: 'Popino', age: 18, color: 'Marroncito toffe', adopted: false })
    .then(createdDog => {
        console.log('El perro creado es este:', createdDog)
    })
    .catch(err => {
        console.log('ERROR -->', err)
    })





// // // .create()
// // // argumento: arrays de objetos a crear en la BBDD
// // // retorno: arrays de objetos creados en BBDD

// Dog
//     .create([
//         { name: 'Lassie', age: 5, adopted: true, color: 'Negro' },
//         { name: 'Popino', age: 14, adopted: true, color: 'Toffe y caramelo' },
//         { name: 'Salchichonio', age: 14, adopted: false, color: 'Toffe y caramelo' },
//         { name: 'Scooby Doo', age: 1, adopted: true, color: 'Marroncito' },
//         { name: 'Godzilla', age: 16, adopted: false, color: 'Toffe y caramelo' }
//     ])
//     .then(theNewDogs => console.log('Se ha creado estos registros:', theNewDogs))
//     .catch(err => console.log('Se ha producido un error:', err))