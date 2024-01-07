const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const sendEmail = async (message) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: "587",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    const options = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_CLIENT,
      subject: "Message reçu depuis le Portfolio",
      html: message,
    };
  
    // Send Email
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  };
  
  module.exports = sendEmail;