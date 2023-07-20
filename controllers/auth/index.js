const signUp = require("./signUp");
const signIn = require("./signIn");
const verifyUser = require("./verifyUser");
const getCurrentUser = require("./getCurrent");
const refreshToken = require("./refreshToken");
const signOut = require("./signOut");
const uploadAvatar = require("./updateAvatar");
const updateSubccription = require("./updateSubscription");

module.exports = {
    signUp,
    signIn,
    verifyUser,
    getCurrentUser,
    refreshToken,
    signOut,
    uploadAvatar,
    updateSubccription,
};
