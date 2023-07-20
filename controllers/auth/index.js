const signUp = require("./signUp");
const signIn = require("./signIn");
const verifyUser = require("./verifyUser");
const getCurrentUser = require("./getCurrent");
const refreshToken = require("./refreshToken");
const signOut = require("./signOut");
const uploadAvatar = require("./uploadAvatar");

module.exports = {
    signUp,
    signIn,
    verifyUser,
    getCurrentUser,
    refreshToken,
    signOut,
    uploadAvatar,
};
