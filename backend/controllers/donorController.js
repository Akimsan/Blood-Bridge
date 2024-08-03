// backend/controllers/donorController.js
const Donor = require("../models/Donor");




// http://localhost:5000/api/auth/register
exports.registerDonor = async (req, res) => {
 const {fullName,age,bloodType,contactNumber,address,healthIssues,lastDonationDate,emergencyContact} = req.body;
 try {
   const donor = new Donor({ fullName,age,bloodType:bloodType.toUpperCase(),contactNumber,address,healthIssues,lastDonationDate,emergencyContact });
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


// exports.getDonors = async (req, res) => {
//   try {
//     const { bloodType } = req.query;

//     if (!bloodType) {
//       return res.status(400).json({ error: 'Blood type query parameter is required' });
//     }

//     // Use regex for case-insensitive search
//     const donors = await Donor.find({
//       bloodType: { $regex: new RegExp(bloodType, 'i') }
//     });

//     res.json(donors);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
exports.getDonors = async (req, res) => {
  try {
    const { bloodType } = req.body;
    if (!bloodType) {
      return res.status(400).json({ error: 'Blood type query parameter is required' });
    }

    // Trim any extra whitespace
    const BloodType = bloodType;

    // Log for debugging
    console.log(`Searching for blood type: ${BloodType}`);

    // Use regex for case-insensitive search
    // const donors = await Donor.find({
    //   bloodType: { $regex: new RegExp(`^${BloodType}$`, 'i') }
    // });
    const donors = await Donor.find({
      bloodType: BloodType.toUpperCase()
    });

    if (donors.length === 0) {
      return res.status(404).json({ error: 'No donors found for the given blood type' });
    }

    res.json(donors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
