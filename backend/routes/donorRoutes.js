
// backend/routes/donorRoutes.js
const express = require("express");
const { registerDonor, getDonors } = require("../controllers/donorController");
const router = express.Router();

router.post("/register", registerDonor);
router.get("/", getDonors);


module.exports = router;