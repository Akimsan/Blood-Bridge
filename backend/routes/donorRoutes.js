
// backend/routes/donorRoutes.js
const express = require("express");
const { registerDonor, getDonors } = require("../controllers/donorController");

const router = express.Router();

router.post("/register", registerDonor);
router.post("/donors", getDonors);


module.exports = router;