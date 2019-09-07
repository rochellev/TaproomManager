import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyle = {
    backgroundColor: "#ecf0f1"
  };
  return (
    <div style={headerStyle}>
      <h1>Taproom Manager</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Create a New Keg</Link>
    </div>
  );
}

export default Header;