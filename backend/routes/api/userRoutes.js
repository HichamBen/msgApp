const router = require("express").Router();

const {
  verifyAccount,
  sendNewVerificationCode,
} = require("../../controllers/registerControllers");

router.get("/newCode", verifyAccount);
router.post("/verifyAccount", sendNewVerificationCode);

module.exports = router;
