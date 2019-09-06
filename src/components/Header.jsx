import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Taproom Manager</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Create a New Keg</Link>
    </div>
  );
}

export default Header;