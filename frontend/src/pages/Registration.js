
// src/Registration.js
import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';

const Registration = () => {
   
  const navigate = useNavigate();//inbuilt 

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodType: "",
    contactNumber: "",
    address: "",
    healthIssues: "",
    lastDonationDate: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
      e.preventDefault();

         // Destructure formData
    const { fullName, age, bloodType, contactNumber, address, healthIssues, lastDonationDate, emergencyContact } = formData;

    // Add form validation logic here
   if (!fullName || !age || !bloodType || !contactNumber || !address || !healthIssues || !emergencyContact) {
    alert("All fields are required!");
    return;
  }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          age:formData.age,
          bloodType:formData.age,
          contactNumber:formData.contactNumber,
          address:formData.address,
          healthIssues:formData.healthIssues,
          lastDonationDate:formData.lastDonationDate,
          emergencyContact:formData.emergencyContact
        })
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Donor Form submitted successfully', data);

        navigate('/');

        // Handle successful signup (e.g., redirect to login page, show success message)
      } else {
        console.error('Error submitting form', data);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error submitting form', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://www.example.com/your-background-image.jpg')] flex items-center justify-center">
      <div className="max-w-lg w-full p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Blood Donation Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blood Type
            </label>
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Any Health Issues
            </label>
            <textarea
              name="healthIssues"
              value={formData.healthIssues}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              rows="3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Donation Date
            </label>
            <input
              type="date"
              name="lastDonationDate"
              value={formData.lastDonationDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Emergency Contact
            </label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
