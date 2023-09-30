const { createSeller, test, loginSeller } = require("../controllers/sellerController");

const router = require("express").Router();

router.get("/test", test);
router.post("/create", createSeller);
router.post("/login", loginSeller);



module.exports = router;