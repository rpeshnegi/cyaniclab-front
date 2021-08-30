var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'cyaniclab@gmail.com',
        pass: 'bdqcybqnxsrjgtaj'
    }
});


export default function handler(req, res) {
    // return res.end(JSON.stringify({ body: req.body }))
    let name = req.body.name;
    let email = req.body.email;
    let description = req.body.description;
    let html = `Name: ${name} <br/>
                Email: ${email}<br/>
                Description: ${description}`;

    let mailOptions = {
        from: 'cyaniclab@gmail.com',
        to: 'cyaniclab@gmail.com, lkjas1995@gmail.com, jas@cyaniclab.com',
        subject: 'CyanicLab Contact',
        html: html
    };


    res.setHeader('Content-Type', 'application/json')
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.statusCode = error.responseCode
            res.end(JSON.stringify({ error: error }))
        } else {
            console.log('Email sent: ' + info.response);
            res.statusCode = 200
            res.end(JSON.stringify({ success: true }))
        }
    });

}