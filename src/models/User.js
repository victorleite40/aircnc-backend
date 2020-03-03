const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({ // Informaçoes a serem armazenadas do usuario
    email: String
});

module.exports = mongoose.model('User' , UserSchema);