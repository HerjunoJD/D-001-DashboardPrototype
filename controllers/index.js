const { User } = require('../models')


module.exports = {
    home: (req, res) => res.render('pages/default/home'),

    getUserList: async (req, res) => {
        let userlist = await User.findAll()
        return res.status(200).json({
            userlist: userlist
        })
    }
}