var nodemailer = require('nodemailer');
require('dotenv').config()


var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  //   service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});
const sendOtp = (username = "user", email, password) => {
  return new Promise((resolve, reject) => {
    var mailOptions = {
      from: 'ritikrajcoder@gmail.com',
      to: email,
      subject: 'Welcome to E-Suchana ',
      // text: `Your default password is ${password}`
      html: `<h1>Hello ${username}</h1>
    <h2>Your Login Credentials are :-</h2>
    <h3>Your Login Id is ${email}</h3>
    <h3>Your Default Password is ${password}</h3>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("--->" + error);
        reject(false)
      } else {
        console.log('Email sent: ' + info.response);
        resolve(true)
      }
    });
  })
}

module.exports = sendOtp
