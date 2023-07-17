const Token = require("../../models/token");

const signOut = async (req, res) => {
    const { user } = req;
    console.log(user.id);
    await Token.findOneAndDelete(user.id);

    res.status(204).json({ message: "No Content" });
};

module.exports = signOut;
