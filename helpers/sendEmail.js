import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { UKRNET_MAIL_FROM, UKRNET_MAIL_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKRNET_MAIL_FROM,
    pass: UKRNET_MAIL_PASSWORD,
  },
});

function sendEmail(message) {
  return transport.sendMail(message);
}

export default sendEmail;
