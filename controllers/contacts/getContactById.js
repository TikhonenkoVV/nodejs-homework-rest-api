const Contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getOneById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contacts.findOne(
        { _id: contactId },
        "-createdAt -updatedAt -owner"
    );
    if (!result) throw RequestError(404, "Not Found");
    res.json(result);
};

module.exports = getOneById;
