const router = require("express").Router();

const { loginController } = require("../controllers/authControllers");

router.post("/", loginController);

module.exports = router;
