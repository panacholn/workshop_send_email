const sender = require('./sender');

// setup email data with unicode symbols
let mailOptions = {
    from: '"Panacholn 👻" <panacholn@thinknet.co.th>', // sender address
    to: 'panacholn@gmail.com', // list of receivers
    subject: 'Hello from ice', // Subject line
    text: 'Do you receive this mail?', // plain text body
    html: '<b>Do you receive this mail?</b>' // html body
};

sender.sendMail(mailOptions);