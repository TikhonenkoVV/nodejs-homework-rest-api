const { RequestError } = require("../../helpers");
const User = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = User.findOne({ email });
    if (!user) {
        throw RequestError(404, "User not found");
    }
    if (user.verify) {
        throw RequestError(401, "User is already verified");
    }
    const verifyEmail = {
        to: email,
        subject: "Verify your e-mail",
        html: `<a target="_blanck" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click to verify your email</a>`,
    };

    sendEmail(verifyEmail);

    res.json({ message: "Email sent successfully" });
};

module.exports = resendVerifyEmail;
