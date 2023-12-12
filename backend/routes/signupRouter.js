const router = require("express").Router();
const upload = require("multer")();

const { registerControllers } = require("../controllers/registerControllers");

router.post("/", upload.single("picture"), registerControllers);

module.exports = router;
