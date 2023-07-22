const User = require("../../models/user");
const bcrypt = require("bcrypt");
const { RequestError, authHelper } = require("../../helpers");

const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(401, "Email or password is wrong");
    }
    if (!user.verified) {
        throw RequestError(401, "Email is not verified! Check your mailbox!");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw RequestError(401, "Email or password is wrong");
    }
    const tokens = await authHelper.updateTokens(user.id);
    res.json({
        tokens,
        user: {
            name: user.name,
            email: user.email,
            subscription: user.subscription,
        },
    });
};

module.exports = signIn;
