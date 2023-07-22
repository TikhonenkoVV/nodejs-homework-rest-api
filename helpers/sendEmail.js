const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;

const sendEmail = async ({ to, subject, html }) => {
    const email = {
        from: "fson69bite@meta.ua",
        to,
        subject,
        html,
    };

    const nodeMailerConfig = {
        host: "smtp.meta.ua",
        port: 465,
        secure: true,
        auth: {
            user: "fson69bite@meta.ua",
            pass: META_PASSWORD,
        },
    };

    const transport = nodemailer.createTransport(nodeMailerConfig);

    console.log("email", email);
    await transport.sendMail(email);
};

module.exports = sendEmail;
