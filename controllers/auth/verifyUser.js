const User = require("../../models/user");
const bcrypt = require("bcrypt");
const RequestError = require("../../helpers");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const verifyUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw RequestError(401, "Email or password is wrong");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw RequestError(401, "Email or password is wrong");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "15m" });
    res.json({ token });
};

module.exports = verifyUser;
