import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Keg(props) {
  
  // save data directly to redux store instead of callback
  function handleSavingSelectedKeg(kegId){
    const {dispatch } = props;
    const action = {
      type: 'SELECTED_KEG',
      kegId: kegId
    };
    dispatch(action);
  }
  const kegInformation =
    <div class='container'>
    <div class='card border'>
      <div class='card-header'>
        <h4 class='card-title'>{props.name}</h4>
        <h6 class='card-subtitle'>{props.brand}</h6>
      </div>
      <div class='card-body'>
        <ul class='list-group list-group-flush'>
          <li class='list-group-item'>Price: ${props.price}</li>
          <li class='list-group-item'>Alcohol Content: {props.alcoholContent}%</li>
          <li class='list-group-item'>Pints Remaining: {props.pintsRemaining}</li>
        </ul>
      </div>
    </div>
    <br></br>
    </div>;
    
  if (props.currentRouterPath === '/employee') {
    return (
      <div onClick={() => {handleSavingSelectedKeg(props.kegId); }}>
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
  kegId: PropTypes.string.isRequired
};

export default connect()(Keg);