const transporter = require('../config/mailer');
const template = require('../emails/birthdayTemplate');


exports.sendBirthdayEmail = async (user) => {
const html = template({ username: user.username || 'Friend' });


const mailOptions = {
from: process.env.GMAIL_USER,
to: user.email,
subject: `Happy Birthday, ${user.username || 'Friend'}! 🎉`,
html
};


return transporter.sendMail(mailOptions);
};