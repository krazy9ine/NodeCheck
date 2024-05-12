const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxx_email@gmail.com',
    pass: 'xxx_password' 
  }
});

const mailOptions = {
  from: 'xxx_email@gmail.com',
  to: 'recipient_email@example.com', 
  subject: 'Test Email',
  text: 'This is a test email from Node.js using nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
