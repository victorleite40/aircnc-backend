// Métodos do controller: index (cria uma listagem completa), show (lista apenas uma sessao), store (cria uma sessao), update (altera sessao), destroy (deletar sessao)

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email }); // Verifica se um email ja é cadastrado
        
        if (!user) {
            user = await User.create({ email }); // Await faz com que o prog espere a ação na DB ser completada, a função precisa asyncrona
        }

        return res.json(user);
    }
};