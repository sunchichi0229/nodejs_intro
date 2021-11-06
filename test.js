const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ae9777834eaae0",
      pass: "59cdd827ecbdd0"
    }
  };


const send = async (option) => {
    nodemailer.createTransport(email)
};