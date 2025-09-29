const nodemailer = require('nodemailer');


// Simple Gmail SMTP transporter. For production prefer OAuth2.
const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: process.env.GMAIL_USER,
pass: process.env.GMAIL_PASS
}
});


transporter.verify().then(() => {
console.log('Mailer ready');
}).catch(err => {
console.warn('Mailer verification failed. Check credentials or network.', err.message);
});


module.exports = transporter;