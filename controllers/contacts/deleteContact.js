const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const deleteContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.findByIdAndDelete(contactId);
    if (!result) {
        throw RequestError(404, "Not found");
    }
    res.json({
        message: "Delete success",
    });
};

module.exports = deleteContact;
