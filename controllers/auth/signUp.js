const { RequestError, sendEmail } = require("../../helpers");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { BASE_URL } = process.env;

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
        throw RequestError(409, "Email is already in use");
    }
    const avatarURL = gravatar.url(email, { s: "250" });
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const verificationToken = nanoid();
    const result = await User.create({
        name,
        email,
        password: hashedPassword,
        avatarURL,
        verificationToken,
    });

    const verifyEmail = {
        to: email,
        subject: "Verify your e-mail",
        html: `<a target="_blanck" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to verify your email</a>`,
    };

    sendEmail(verifyEmail);

    res.status(201).json({
        user: {
            name: result.name,
            email: result.email,
            subscription: result.subscription,
            avatarURL: result.avatarURL,
        },
    });
};

module.exports = signUp;
