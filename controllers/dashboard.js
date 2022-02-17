const moment = require('moment');
const { User } = require('../models');

module.exports = {
    dashboardGet: async (req, res) => {
        let dataUser = await User.findAll()
        // return res.status(200).render('pages/dashboard/home')
        return res.status(200).render('pages/dashboard/home', { dataUser })
    },

    dashboardCreate: async (req, res) => {
        console.log(req.body);

        //Pasang penjaga buat ngecek body

        //Penjaga untuk memeriksa apakah nama yang digunakan sudah terdaftar atau belum
        let user = await User.findOne({ where: {username: req.body.username} })
        if(!user){
            User.create({
                username: req.body.username,
                total_upload: 0,
                last_submit: 0
            })
            return res.status(201).redirect('/dashboard');
        }
        return res.status(409).json({ message: "Username sudah terdaftar di Dashboard" })
    },

    dashboardUpdateUpload: async (req, res) => {
        let userdata = await User.findOne({ where: { id: req.params.id }})
        let upload = userdata.dataValues.total_upload + 1
        let submit = moment().format();
        User.update({ total_upload: upload, last_submit: submit }, { where: { id: req.params.id }})
    },

    dashboardDelete: async (req, res) => {
        let Delete = await User.destroy({ where: { id: req.params.id }})
        if(!Delete){
            return res.status(404).json({ message: "User yang bersangkutan tidak ditemukan" })
        }
        return res.status(200).redirect('/dashboard')
    },

    dashboardUserGet: async (req,res) => {
        let dataUser = await User.findOne({ where: { id: req.params.id }})
        return res.status(200).render('pages/dashboard/update', { dataUser })
    }
}