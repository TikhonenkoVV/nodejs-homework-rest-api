const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getOneById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.findOne({ _id: contactId });
    if (!result) throw RequestError(404, "Not Found");
    res.json(result);
};

module.exports = getOneById;
