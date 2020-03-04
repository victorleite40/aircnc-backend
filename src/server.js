require("dotenv").config();

const express = require('express'); // Importa a dependencia 
const mongoose = require('mongoose'); // Importa a dependencia 
const cors = require('cors'); // Importa a dependencia 
const path = require('path'); // 

const routes = require('./routes'); // Importa o arquivo

const app = express(); // Cria a aplicação

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 }); // Conecta à DB

// Métodos de uma api: GET (busca), POST (cria), PUT (altera), DELETE (deleta)

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisicao (para criacao e edicao)

app.use(cors()); // permite que qualquer endereço de app acesse a API
app.use(express.json()); // Define que deve-se usar formato json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); // Usado para retornar arquivos
app.use(routes); // Sempre dps do comando interior

/* 
app.post('/users', (req, res) => { // Define o que será executado na rota escolhida ('/users')
    return res.json(req.body); // Envia uma resposta, no caso um objeto json
}); 
*/

app.listen(3333); // Inicia a aplicação nesta porta

