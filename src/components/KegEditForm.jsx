import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm'

function KegEditForm(props){
  return (
    <div>
      <h2>{props.selectedKeg.name}</h2>
      <NewKegForm />
      
    </div>
  );
}

KegEditForm.propTypes={
  selectedKeg: PropTypes.object
};

export default KegEditForm;