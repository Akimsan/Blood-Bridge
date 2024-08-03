// backend/models/Donor.js
const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  bloodType: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  healthIssues: { type: String },
  lastDonationDate: { type: Date },
  emergencyContact: { type: String, required: true },
});

module.exports = mongoose.model("Donor", DonorSchema);