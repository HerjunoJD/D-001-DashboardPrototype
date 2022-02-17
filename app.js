const express = require('express');
const app = express();
const logger = require('morgan');
const bodyparser = require('body-parser');
const port = 3000;

// Morgan di sini digunakan untuk membuat data berbentuk tanggal dan waktu
// Hal ini dikarenakan ada tipe data DATE yang digunakan di dalam database ini
// Jika tidak akan menggunakan tipe data tersebut, Morgan bisa tidak dipakai

const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended:false }));
app.use(bodyparser.json());

app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});