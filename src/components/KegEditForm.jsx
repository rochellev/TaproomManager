import React from 'react';
import PropTypes from 'prop-types';

function KegEditForm(props){
  return (
    <div>
      <p>{props.selectedKeg.name}</p>
      {/* add call back function */}
      <form onSubmit={}>

      </form>
      
    </div>
  );
}

KegEditForm.propTypes={
  selectedKeg: PropTypes.object
};

export default KegEditForm;