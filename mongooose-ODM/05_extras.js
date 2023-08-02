require('./db/0_ddbb-connection')

const Dog = require('./models/dog.model')


// .countDocuments()
// recibe opcionalmente una query como argumento
// retorna el sumatorio de elementos

Dog
    .countDocuments({ age: { $lte: 15 } })
    .then(info => console.log(`Hay un total de ${info} perros`))
    .catch(err => console.log('Se produjo un error:', err))







// .sort() ordena el retorno
// .limit() limita el retorno

Dog
    .find()
    .sort({ age: 1, name: 1 })                          // ordena
    .select({ name: 1 })                                 // proyecta
    .skip(4)                                            // ignora
    .limit(4)                                           // limita
    .then(allDogsFromDB => console.log(allDogsFromDB))
    .catch(err => console.log('Se produjo un error:', err))