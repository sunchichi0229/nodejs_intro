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
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: 'mymai1113@naver.com',
    to: 'mymai1113@naver.com',
    subject: 'テストメールです。',
    text: 'nodejsを簡単に学ぼう'
}

send(email_data);