const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

// ddbb connection
require('./db/database-connection')

// model
const Dog = require('./models/dog.model')

app.get('/', (req, res) => {
    res.render('home-page')
})

app.get('/listado', (req, res) => {

    Dog
        .find()
        .sort({ name: 1 })
        .then(dogs => res.render('dogs-page', { dogs }))
        .catch(err => console.log(err))
})

app.get('/peques', (req, res) => {

    Dog
        .find({ age: { $lt: 10 } })
        .then(dogs => res.render('dogs-page', { dogs }))
        .catch(err => console.log(err))
})

app.listen(5005, () => console.log('Server running on port 5005'))