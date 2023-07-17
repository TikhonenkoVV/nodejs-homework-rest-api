const { Schema, model } = require("mongoose");

const contactsSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
        },
        surname: {
            type: String,
        },
        phone: {
            type: String,
            required: [true, "Enter the contact number"],
        },
        email: {
            type: String,
        },
        img: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { versionKey: false, timestamps: true }
);

const Contacts = model("contacts", contactsSchema);

module.exports = Contacts;
