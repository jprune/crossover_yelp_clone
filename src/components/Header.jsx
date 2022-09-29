import React from 'react';

const Header = () => (
  <nav className="flex justify-between px-10 py-5">
    <h2>YELP</h2>
    <div>Categories to click</div>
    <div className="flex w-1/5 justify-between pl-5">
      <div>Social Media Icons</div>
      <button type="button">Login</button>
    </div>
  </nav>
);

export default Header;
