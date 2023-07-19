const user = require("../../models/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await user.create({ name, email, password: hashedPassword });
    res.status(201).json({
        user: {
            name: result.name,
            email: result.email,
            subscription: result.subscription,
        },
    });
};

module.exports = signUp;
