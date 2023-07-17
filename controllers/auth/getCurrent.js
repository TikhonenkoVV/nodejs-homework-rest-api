const User = require("../../models/user");

const getCurrentUser = async (req, res) => {
    const { user } = req;
    console.log(user);
    if (!user) {
        throw RequestError(404, "User not found");
    }
    res.json({ email: user.email, subscription: user.subscription });
};

module.exports = getCurrentUser;
