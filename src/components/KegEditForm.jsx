import React from 'react';
import PropTypes from 'prop-types';

function KegEditForm(){
  return (
    <div>
      <p>Keg edit form</p>
    </div>
  );
}

KegEditForm.propTypes={
  selectedKeg: PropTypes.object
};

export default KegEditForm;