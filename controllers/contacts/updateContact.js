const Contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contacts.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });
    if (!result) throw RequestError(404, "Not found");
    res.status(200).json(result);
};

module.exports = updateContact;
