import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-950 text-white p-4 fixed top-0 left-0 w-full z-50 pt-15 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blood Bridge</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-300"><Link to="/">Home</Link></a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-300">Services</a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:text-blue-300">About Us</a>
            </li>
            <li>
              <a href="/login" className="bg-white hover:bg-red-200 text-white py-2 px-4 rounded"><Link to="/sign-up" className='text-black font-bold'>SignUp</Link></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
