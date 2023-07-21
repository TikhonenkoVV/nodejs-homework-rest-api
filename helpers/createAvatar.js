const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

const createAvatar = async (file) => {
    const tmpFile = path.resolve(__dirname, "../tmp", file);
    const publicFile = path.resolve(__dirname, "../public/avatars", file);
    (await jimp.read(tmpFile)).cover(250, 250).write(tmpFile);
    try {
        await fs.rename(tmpFile, publicFile);
    } catch (error) {
        await fs.unlink(tmpFile);
        throw error;
    }
};

module.exports = createAvatar;
