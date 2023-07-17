const express = require("express");
const controllWrapper = require("../../helpers/ctrlWrapper");
const contactsCtrl = require("../../controllers/contacts");
const { validateBody, auth } = require("../../middlewares");
const schema = require("../../schemas/contactSchema");

const router = express.Router();

router.get("/", controllWrapper(auth), controllWrapper(contactsCtrl.getAll));

router.get(
    "/:contactId",
    controllWrapper(auth),
    controllWrapper(contactsCtrl.getOneById)
);

router.post("/", controllWrapper(auth), controllWrapper(contactsCtrl.add));

router.delete(
    "/:contactId",
    controllWrapper(auth),
    controllWrapper(contactsCtrl.remove)
);

router.put(
    "/:contactId",
    controllWrapper(auth),
    validateBody(schema.contactSchema),
    controllWrapper(contactsCtrl.update)
);

router.patch(
    "/:contactId/favorite",
    controllWrapper(auth),
    validateBody(schema.toggleFavoriteSchema),
    controllWrapper(contactsCtrl.toggleFavorite)
);

module.exports = router;
