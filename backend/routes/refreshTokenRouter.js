const router = require("express").Router();

const { refreshTokenController } = require("../controllers/authControllers");

router.get("/token", refreshTokenController);

module.exports = router;
