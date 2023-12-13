const router = require("express").Router();
const upload = require("multer")();

const { signupController } = require("../controllers/registerControllers");

router.post("/", upload.single("picture"), signupController);

module.exports = router;
