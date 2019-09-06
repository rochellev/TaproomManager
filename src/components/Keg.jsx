import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <div>
            Name: {props.name} ... Brand: {props.brand} ... Price: {props.price}
        </div>
    )
}

Keg.prototype = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired,
    pintsRemaining: PropTypes.string.isRequired
}

export default Keg;