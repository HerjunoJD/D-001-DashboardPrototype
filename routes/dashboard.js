const router = require('express').Router();
const dashboardController = require('../controllers/dashboard');

router.get('/', dashboardController.dashboardGet);
router.get('/register', (req, res) => { res.render('pages/default/register') });
router.post('/register', dashboardController.dashboardCreate);
router.patch('/update/:id', dashboardController.dashboardUpdateUpload);
router.delete('/delete/:id', dashboardController.dashboardDelete);
router.get('/user/:id', dashboardController.dashboardUserGet);
router.get('/intermezzo', (req, res) => { res.render('pages/dashboard/intermezzo') })
router.get('/delete', (req, res) => { res.render('pages/dashboard/delete') })

router.get('/about', (req, res) => { res.render('pages/dashboard/about') })

module.exports = router