import React from 'react';
import PropTypes from 'prop-types';

function KegEditForm(props){
  return (
    <div>
      <p>Keg edit form</p>
      <p>{props.selectedKeg.name}</p>
    </div>
  );
}

KegEditForm.propTypes={
  selectedKeg: PropTypes.object
};

export default KegEditForm;