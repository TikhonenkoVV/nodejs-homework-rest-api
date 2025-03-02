const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const Token = require("../models/token");
const { tokens } = require("../config/tokenConfig").jwt;

const { JWT_SECRET: secret } = process.env;

const generateAccessToken = (userId) => {
    const payload = {
        userId,
        type: tokens.access.type,
    };

    const options = {
        expiresIn: tokens.access.expiresIn,
    };

    return jwt.sign(payload, secret, options);
};

const generateRefreshToken = () => {
    const payload = {
        id: nanoid(),
        type: tokens.refresh.type,
    };

    const options = {
        expiresIn: tokens.refresh.expiresIn,
    };

    return {
        id: payload.id,
        token: jwt.sign(payload, secret, options),
    };
};

const replaceDbRefreshToken = async (tokenId, userId) => {
    await Token.findOneAndDelete(userId);

    const result = await Token.create({ tokenId, userId });

    return result;
};

const updateTokens = async (userId) => {
    const accessToken = authHelper.generateAccessToken(userId);
    const refreshToken = authHelper.generateRefreshToken();

    await authHelper.replaceDbRefreshToken(refreshToken.id, userId);

    return { accessToken, refreshToken: refreshToken.token };
};

const authHelper = {
    generateAccessToken,
    generateRefreshToken,
    replaceDbRefreshToken,
    updateTokens,
};

module.exports = authHelper;
