import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-6 mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">Serivices</Link>
              </li>
             
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Blood Bridge Road</p>
            <p className="mb-2">City, State, ZIP</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: contact@bloodbridge.org</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.1c0-5.4-4.4-9.8-9.8-9.8S2.4 6.7 2.4 12.1c0 4.9 3.5 9 8.1 10.2V15.5H7v-3.4h3.5V10c0-3.5 2.1-5.5 5.2-5.5 1.5 0 3.1.1 3.5.2v3.8h-2.4c-1.8 0-2.3 1.4-2.3 2.8v3h4.6l-.6 3.4h-4v6.8c4.6-1.2 8.1-5.3 8.1-10.2z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.5 10.5 0 01-3 1.1A5.27 5.27 0 0022.4 2a10.53 10.53 0 01-3.3 1.3A5.22 5.22 0 0016.6 0a5.23 5.23 0 00-5.2 5.2c0 .4.1.8.1 1.2-4.3-.2-8.1-2.2-10.8-3.1-11.8-.2-.2-.3-.4-.4-.5-.2-.1-.3-.2-.4-.2A10.6 10.6 0 002 8.6c-.1 5.8 4.1 10.4 10.4 10.4-1.7 1.3-3.7 2.1-5.9 2.1-.4 0-.7-.1-1.1-.1 2.3 1.4 5 2.1 7.8 2.1A10.5 10.5 0 0023 3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6.1 4.9.7 1.3.6 2.3 1.6 2.9 2.9.6 1.3.7 1.7.7 4.9s-.1 3.6-.7 4.9c-.6 1.3-1.6 2.3-2.9 2.9-1.3.6-1.7.7-4.9.7s-3.6-.1-4.9-.7c-1.3-.6-2.3-1.6-2.9-2.9-.6-1.3-.7-1.7-.7-4.9s.1-3.6.7-4.9c.6-1.3 1.6-2.3 2.9-2.9 1.3-.6 1.7-.7 4.9-.7zM12 0C8.7 0 8.2.1 7.1.4 6 1 4.7 2.3 3.7 3.7 2.7 5.2 2.4 6.7 2.4 12s.3 6.8 1.3 8.3c1 1.4 2.3 2.7 3.7 3.3 1.1.3 1.6.4 3.9.4 2.3 0 2.8-.1 3.9-.4 1.4-.6 2.7-1.9 3.7-3.3.9-1.5 1.3-2.6 1.3-8.3s-.3-6.8-1.3-8.3c-1-1.4-2.3-2.7-3.7-3.3-1.1-.3-1.6-.4-3.9-.4zM12 5.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7S18.7 15.7 18.7 12 15.7 5.3 12 5.3zm0 10.1c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zM16.6 6.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">© 2024 Blood Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
