const { Schema, model } = require("mongoose");

const tokenSchema = new Schema(
    {
        tokenId: String,
        userId: String,
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Token = model("tokens", tokenSchema);

module.exports = Token;
