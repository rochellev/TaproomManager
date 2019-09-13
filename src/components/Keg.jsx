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
  if (props.currentRouterPath === '/employee') {
    return (
      <div onClick={() => {props.onKegSelection({name: props.name, brand: props.brand, price: props.price, alcoholContent: props.alcoholContent, pintsRemaining: props.pintsRemaining}); }}>
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
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default Keg;