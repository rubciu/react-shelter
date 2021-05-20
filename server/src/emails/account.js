const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ruben.montes.mendoza@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ruben.montes.mendoza@gmail.com',
    subject: 'Hope to see you soon!',
    text: 'Is there anything we can do to keep you with us?',
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
