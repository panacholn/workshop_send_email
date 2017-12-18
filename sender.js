const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'testuserjtm@gmail.com', // generated ethereal user
//         pass: 'testuser'  // generated ethereal password
//     }
// });

const transporter = nodemailer.createTransport({
    host: '192.168.101.1',
    port: 25,
});

const sendMail = (options) => (
  // send mail with defined transport object
  transporter.sendMail(options, (error, info) => {
    if (error) { return console.log(error); }
    console.log('Message sent: %s', info.messageId);
  })
);

exports.sendMail = sendMail;