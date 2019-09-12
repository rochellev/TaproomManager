import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
    <div>
      <li>Name: {props.name}</li>
      <li>Brand: {props.brand}</li>
      <li>Price: ${props.price}</li>
      <li>Alcohol Content: {props.alcoholContent}%</li>
      <li>Pints Remaining: {props.pintsRemaining}</li>
      <br></br>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { alert('hey, you just clicked the keg with beer name: ' + props.name); }}>

        {kegInformation}
      </div>
    );
  }
  return (
    <div>
      {kegInformation}
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Keg;