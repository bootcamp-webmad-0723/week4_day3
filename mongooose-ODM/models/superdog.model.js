const mongoose = require('mongoose')

// dog schema

const superDogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Nombre desconocido',
        minlength: 2,
        maxlength: 100,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },
    age: {
        type: Number,
        min: 1,
        max: 10
    },
    color: {
        type: String,
        enum: ['Marrón', 'Negro', 'Blanco', 'Varios']
    },
    chip: {
        type: String,
        match: /[0-6]{4}[A-C]/
    },
    email: {
        type: String,
        validate: {
            validator: value => value.endsWith('@ironhack.com'),
            message: 'Sólo perros con email corporativo, ¡HOMBRE YA!'
        }

    }
})

// dog model
const Dog = mongoose.model('dog', superDogSchema)

module.exports = Dog