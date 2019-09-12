import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      {props.kegList.map((keg) => <Keg name={keg.name} brand={keg.brand} price={keg.price} alcoholContent={keg.alcoholContent} pintsRemaining={keg.pintsRemaining} currentRouterPath={props.currentRouterPath} key={keg.id} onKegSelection={props.onKegSelection} /> )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList;