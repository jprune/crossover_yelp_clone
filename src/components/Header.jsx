import React from 'react';
import { FaYelp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Header = () => (
  <nav className="flex flex-wrap lg:flex-nowrap justify-center items-center px-4 py-5 bg-gradient-to-r from-red-400 to-orange-200 shadow-xl">
    <div className="flex justify-center items-center w-full">
      <FaYelp className="w-8 h-8" />
      <h2 className="text-2xl text-bold ml-2">YELP</h2>
    </div>
    <div className="flex w-full justify-center items-center mt-3">
      <div className="flex w-24 justify-between mr-3">
        <FaFacebook className="w-6 h-6" />
        <FaInstagram className="w-6 h-6" />
        <FaTwitter className="w-6 h-6" />
      </div>
      <button type="button" className="rounded-lg bg-red-600 px-4 py-2 shadow-lg">Login</button>
    </div>
  </nav>
);

export default Header;
