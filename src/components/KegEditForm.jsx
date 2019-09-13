import React from 'react';
import PropTypes from 'prop-types';

function KegEditForm(props){
  return (
    <div>
      <h2>{props.selectedKeg.name}</h2>
      <form onSubmit={call}>
        <div class='form-group'>
          
        </div>

      </form>
      
    </div>
  );
}

KegEditForm.propTypes={
  selectedKeg: PropTypes.object
};

export default KegEditForm;