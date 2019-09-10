import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      {props.kegList.map((keg, index) => <Keg name={keg.name} brand={keg.brand} />)}
    </div>
  );
}

KegList.prototype = {
  kegList: PropTypes.array
}

export default KegList;