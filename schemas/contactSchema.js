const joi = require("joi");

const contactSchema = joi.object({
    name: joi.string().required(),
    surname: joi.string(),
    email: joi.string(),
    phone: joi.string().required(),
    img: joi.string(),
    favorite: joi.boolean().required(),
});

const toggleFavoriteSchema = joi.object({
    favorite: joi.boolean().required(),
});

module.exports = { contactSchema, toggleFavoriteSchema };
