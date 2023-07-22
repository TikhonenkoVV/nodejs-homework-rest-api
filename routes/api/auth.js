const express = require("express");
const contrrollWrapper = require("../../helpers/ctrlWrapper");
const authCtrl = require("../../controllers/auth");
const { auth, validateBody, upload } = require("../../middlewares");
const schema = require("../../schemas/authSchema");

const router = express.Router();

router.post(
    "/signup",
    validateBody(schema.signUpSchema),
    contrrollWrapper(authCtrl.signUp)
);

router.get(
    "/verify/:verificationToken",
    contrrollWrapper(authCtrl.verifyEmail)
);

router.get(
    "/verify",
    validateBody(schema.emailSchema),
    contrrollWrapper(authCtrl.resendVerifyEmail)
);

router.post(
    "/signin",
    validateBody(schema.signInSchema),
    contrrollWrapper(authCtrl.signIn)
);

router.get(
    "/current",
    contrrollWrapper(auth),
    contrrollWrapper(authCtrl.getCurrentUser)
);

router.post("/refresh", contrrollWrapper(authCtrl.refreshToken));

router.post(
    "/signout",
    contrrollWrapper(auth),
    contrrollWrapper(authCtrl.signOut)
);

router.patch(
    "/avatars",
    contrrollWrapper(auth),
    upload.single("avatar"),
    contrrollWrapper(authCtrl.uploadAvatar)
);

router.patch(
    "/",
    contrrollWrapper(auth),
    validateBody(schema.subscriptionSchema),
    contrrollWrapper(authCtrl.updateSubccription)
);

module.exports = router;
