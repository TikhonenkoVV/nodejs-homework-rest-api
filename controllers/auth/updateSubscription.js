const User = require("../../models/user");

const updateSubccription = async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;
    const result = await User.findByIdAndUpdate(
        _id,
        { subscription },
        { new: true }
    );
    res.json(result);
};

module.exports = updateSubccription;
