const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    console.log('in it');
    const msg = {
        from: "atitbotnext@gmail.com",
        to: "marketing@atit-sa.com",
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
        console.log(err);
        res.send('in it');
        if (err) { res.status(500).send(err); }
        else res.status(200).json(req.body);
    })

});


const parseResponse = ({ body }) => {

    switch (body.status) {
        case "Student": return studentResponse(body);
        case "Fresh Graduate": return freshGraduateResponse(body);
        case "Worker": return JSON.stringify(body);
    }

}

const studentResponse = ({ status, university, scholar, speciality, IT, user }) => {
    let skills = '';
    IT.map(ob => {
        if (ob.value) skills += ob.key + " ";
    })
    return `
    <b>${user.firstName} ${user.lastName}<b/>
    <br/>
    <br/>
    <br/>
    <b>Status</b>:  ${status}
    <br/>
    <br/>
    <b>University</b>:  ${university}
    <br/>
    <br/>
    <b>Scholar</b>:  ${scholar}
    <br/>
    <br/>
    <b>Speciality</b>:  ${speciality}
    <br/>
    <br/>
    <b>skills</b>:  ${skills}
    <br/>
    <br/>
    <b>Personal Information</b>:  
    <br/>
    First Name :    ${user.firstName}
    <br/>
    Last Name :    ${user.lastName}
    <br/>
    Email :    ${user.email}
    <br/>
    Phone :    ${user.phone}
    <br/>
    Nationality :    ${user.nationality}
    <br/>
    Country Of Residence :    ${user.countryOfResidence}
    `;
}


const freshGraduateResponse = ({ status, University, educationLevel, speciality, IT, user }) => {
    let skills = '';
    IT.map(ob => {
        if (ob.value) skills += ob.key + " ";
    })
    return `
    <b>${user.firstName} ${user.lastName}<b/>
    <br/>
    <br/>
    <br/>
    <b>Status</b>:  ${status}
    <br/>
    <br/>
    <b>University</b>:  ${University}
    <br/>
    <br/>
    <b>Education Level</b>:  ${educationLevel}
    <br/>
    <br/>
    <b>Speciality</b>:  ${speciality}
    <br/>
    <br/>
    <b>skills</b>:  ${skills}
    <br/>
    <br/>
    <b>Personal Information</b>:  
    <br/>
    First Name :    ${user.firstName}
    <br/>
    Last Name :    ${user.lastName}
    <br/>
    Email :    ${user.email}
    <br/>
    Phone :    ${user.phone}
    <br/>
    Nationality :    ${user.nationality}
    <br/>
    Country Of Residence :    ${user.countryOfResidence}
    `;
}
module.exports = router;