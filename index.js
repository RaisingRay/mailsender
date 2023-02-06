const express = require('express');
const app = express();
const mail = require('./mailSender.js');
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('listening');
})
app.use("/api/mail", mail)
app.listen(PORT, () => {
    console.log('listening ...');
});