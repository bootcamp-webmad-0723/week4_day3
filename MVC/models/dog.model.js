const { Schema, model } = require('mongoose')

const dogSchema = new Schema({
    name: String,
    age: Number,
    color: String,
    adopted: Boolean
})

const Dog = model('dog', dogSchema)

module.exports = Dog