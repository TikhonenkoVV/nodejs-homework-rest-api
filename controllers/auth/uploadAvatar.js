const User = require("../../models/user");
const { RequestError, createAvatar } = require("../../helpers");

const uploadAvatar = async (req, res) => {
    if (!req.file) {
        throw RequestError(400, "File is requred");
    }
    const { filename } = req.file;
    const { _id } = req.user;
    await createAvatar(filename);
    const avatarURL = `avatars/${_id}_${filename}`;
    const user = await User.findByIdAndUpdate(
        _id,
        {
            avatarURL,
        },
        { new: true }
    );

    return res.json({ avatarURL: user.avatarURL });
};

module.exports = uploadAvatar;
