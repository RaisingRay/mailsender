const express = require('express');
const app = express();
const mail = require('./mailSender.js');
const PORT = process.env.PORT || 3000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/', async (req, res) => {
    res.send('listening');
})
app.use("/api/mail", mail)
app.listen(PORT, () => {
    console.log('listening ...');
});