const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const msg = {
        from: "atitbotnext@gmail.com",
        to: "mf@atit-sa.com",
        subject: "Recruit Bot from deployed app ⚡, " + req.body.status + " Profile",
        html: parseResponse(req),
    }

    nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "atitbotnext@gmail.com",
            pass: "mhiniocwgzphvyjq",
        },
        port: 465,
        host: 'smtp.gmail.com',
    }).sendMail(msg, (err) => {
        if (err) { res.status(500).send(err); }
        else res.status(200).json(req.body);
    })

});

module.exports = router;