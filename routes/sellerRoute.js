const { createSeller, test } = require("../controllers/sellerController");

const router = require("express").Router();

router.get("/test", test);
router.post("/create", createSeller);



module.exports = router;