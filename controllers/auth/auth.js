const { RequestError } = require("../../helpers");
const User = require("../../models/user");

const verifyUser = async (req, res) => {
    const { accessToken } = req.params;
    const user = await User.findOne({ accessToken });
    if (!user) {
        throw RequestError(404, "User not found");
    }
    res.json({
        message: "Verification successful",
    });
};

module.exports = verifyUser;
