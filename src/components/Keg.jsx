import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
    return(
        <div>
            {props.name}
        </div>
    )
}

Keg.prototype = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcoholContent: PropTypes.string,
    pintsRemaining: PropTypes.string
}

export default Keg;