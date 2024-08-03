// src/components/Search.js
import React, { useState } from "react";
import axios from 'axios';

const Search = () => {
  const [input, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const postData = {
        bloodType: input.trim()
      };
      // Make the POST request
      const response = await axios.post('http://localhost:5000/api/auth/donors', postData);
      console.log(response.data);
      setResult(response.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching data');
      setResult([]);
    }
  };

  const renderData = () => {
    if (result.length !== 0) {
      return (
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Full Name</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{item.fullName}</td>
                <td className="border border-gray-300 p-2">{item.age}</td>
                <td className="border border-gray-300 p-2">{item.address}</td>
                <td className="border border-gray-300 p-2">{item.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return 
    }
  };

  return (
    <div>
      <div className="p-4 mt-16">
        <input
          type="text"
          placeholder="Search by blood group..."
          value={input}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
      <div className="p-4">
        {renderData()}
      </div>
      {error && <div className="text-red-500 p-4">{error}</div>}
    </div>
  );
};

export default Search;