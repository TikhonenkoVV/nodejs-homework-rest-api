const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const toggleFavorite = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });
    if (!result) throw RequestError(404, "Not Found");
    res.json(result);
};

module.exports = toggleFavorite;
