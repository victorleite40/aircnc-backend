const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({ // Informaçoes a serem armazenadas do usuario
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: { // Qual usuario criou o spot
        type: mongoose.Schema.Types.ObjectId, // _id do user
        ref: 'User' // A qual model esta se referindo
     }
}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot' , SpotSchema);