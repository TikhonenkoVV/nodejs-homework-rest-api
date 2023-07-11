const express = require("express");
const controllWrapper = require("../../helpers/ctrlWrapper");
const contactsCtrl = require("../../controllers/contacts");
const validateBody = require("../../middlewares");
const schema = require("../../schemas/contactSchema");

const router = express.Router();

router.get("/", controllWrapper(contactsCtrl.getAll));

router.get("/:contactId", controllWrapper(contactsCtrl.getOneById));

router.post("/", controllWrapper(contactsCtrl.add));

router.delete("/:contactId", controllWrapper(contactsCtrl.remove));

router.put(
    "/:contactId",
    validateBody(schema.contactSchema),
    controllWrapper(contactsCtrl.update)
);

router.patch(
    "/:contactId/favorite",
    validateBody(schema.toggleFavoriteSchema),
    controllWrapper(contactsCtrl.toggleFavorite)
);

module.exports = router;
