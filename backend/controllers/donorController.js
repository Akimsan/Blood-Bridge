// backend/controllers/donorController.js
const Donor = require("../models/Donor");

exports.registerDonor = async (req, res) => {
 const {fullName,age,bloodType,contactNumber,address,healthIssues,lastDonationDate,emergencyContact} = req.body;
 try {
   const donor = new Donor({ fullName,age,bloodType,contactNumber,address,healthIssues,lastDonationDate,emergencyContact });
   await donor.save();
     // You can uncomment the following lines if you want to include token generation
    // const token = jwt.sign({ id:doner._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    // res.status(201).json({ token });
   res.status(201).json({ message: "Doner saved" });

 } catch (error) {
   res.status(400).json({ error: error.message });
 }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find({ bloodType: req.query.bloodType });
    res.json(donors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
