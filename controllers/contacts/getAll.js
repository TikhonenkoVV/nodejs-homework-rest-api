const contacts = require("../../models/contacts");

const getAll = async (req, res) => {
    const result = await contacts.find({}, "-createdAt -updatedAt");
    res.json(result);
};

module.exports = getAll;
