import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      {props.kegList.map((keg) => <Keg name={keg.name} brand={keg.brand} price={keg.price} alcoholContent={keg.alcoholContent} printsRemaining={keg.printsRemaining} key={keg.id} /> )}
    </div>
  );
}

KegList.prototype = {
  kegList: PropTypes.array
}

export default KegList;