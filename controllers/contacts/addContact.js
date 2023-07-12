const contacts = require("../../models/contacts");

const add = async (req, res) => {
    const result = await contacts.create(req.body);
    res.status(201).json(result);
};

module.exports = add;
