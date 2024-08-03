// src/AboutUsPage.js
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover our mission, values, and the passionate team behind our blood
          donation efforts.
        </p>
      </header>

      {/* Mission Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700">
          Our mission is to save lives by facilitating voluntary blood donations
          and ensuring that blood is available for those in need. We are
          committed to promoting the importance of blood donation through
          community outreach and education.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Compassion:</strong> We care deeply about the well-being of
            others.
          </li>
          <li>
            <strong>Integrity:</strong> We operate with transparency and
            honesty.
          </li>
          <li>
            <strong>Community:</strong> We believe in the power of working
            together.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest standards in
            everything we do.
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Meet the Team
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Team Member Card */}
          {[
            {
              name: "Jane Doe",
              role: "Founder & CEO",
              imgSrc: "https://via.placeholder.com/150",
              bio: "Jane has been leading the organization with a vision to make blood donation accessible to all.",
            },
            {
              name: "John Smith",
              role: "Medical Director",
              imgSrc: "https://via.placeholder.com/150",
              bio: "John ensures that all medical procedures and standards are followed diligently.",
            },
            {
              name: "Emily Johnson",
              role: "Community Outreach Coordinator",
              imgSrc: "https://via.placeholder.com/150",
              bio: "Emily engages with the community to spread awareness about the importance of blood donation.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200"
              />
              <h3 className="text-2xl font-semibold text-gray-800 text-center">
                {member.name}
              </h3>
              <p className="text-gray-600 text-center">{member.role}</p>
              <p className="mt-2 text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default AboutUsPage;