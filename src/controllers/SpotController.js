const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });
    
        return res.json(spots)
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id); // verifica se o usuario existe

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado.' })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), // Split: Divide a String por vírgulas para obter um Array / Trim elimina os espaços entre as vírgulas e palavras
            price
        });
        
        return res.json(spot)
    }
}