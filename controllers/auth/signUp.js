const { RequestError } = require("../../helpers");
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExist = await User.findOne({ email });
    console.log(isUserExist);
    if (isUserExist) {
        throw RequestError(409, "Email is already in use");
    }
    const avatarURL = gravatar.url(email, { s: "250" });
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await User.create({
        name,
        email,
        password: hashedPassword,
        avatarURL,
    });
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
