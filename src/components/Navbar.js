import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Home </Link>
    <Link to="/app">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </div>
);

export default Navbar;
