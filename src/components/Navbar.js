import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="link-box">
    <Link className="link-menu" to="/">Home </Link>
    <Link className="link-menu" to="/app">Calculator</Link>
    <Link className="link-menu" to="/quote">Quote</Link>
  </div>
);

export default Navbar;
